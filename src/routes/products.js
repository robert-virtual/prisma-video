const router = require("express");

router.post("/", async (req, res) => {
  const product = await prisma.product.create({
    data: req.body,
  });
  res.json({ product });
});

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const products = await prisma.product.findMany({
      include: {
        seller: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    res.json({ products });
  }
);

module.exports = router;
