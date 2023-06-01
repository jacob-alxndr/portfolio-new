// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/preview.js
export default function (req, res) {
  const secret = process.env.PREVIEW_MODE_SECRET;
  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res
      .status(401)
      .json({ message: "Missing or invalid `secret` query string parameter!" });
  }
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the homepage, or to the URL provided with the `redirect` query
  // string parameter:
  const redirectUrl = new URL(
    req.query.redirect || "/",
    "https://jacobmartinez.dev"
  );
  // ...
  // redirecting to the home page
  res.redirect(`${redirectUrl.pathname}${redirectUrl.search}`);
}
