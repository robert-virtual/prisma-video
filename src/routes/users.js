const router = require("express");

// rutas
router.get("/", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      products: true,
    },
  });
  res.json({ users });
});

router.post("/", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.json({ user });
});

module.exports = router;
