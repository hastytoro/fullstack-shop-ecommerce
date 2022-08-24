// Logic here that makes purchases:
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function expressService(req, res) {
  // Create checkout session object that captures data from `req.body` param.
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "ZA", "GB", "IT", "DE"],
        },
        shipping_options: [
          { shipping_rate: "shr_1LZwbZJSo5bJNqnzqzRRjhMc" },
          { shipping_rate: "shr_1LZwguJSo5bJNqnzop3FuXzz" },
        ],
        allow_promotion_codes: true,
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        // Will bring visitors to either a success or failed page.
        // You need the following string to submit to the success page:
        // `?&session_id={CHECKOUT_SESSION_ID}`
        success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
}
