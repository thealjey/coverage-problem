const tape = require("tape");
const { foo } = require("./");

tape("@test/foo", ({ equal, end }) => {
  equal(foo(), "bar");
  end();
});
