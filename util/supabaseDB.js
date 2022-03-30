const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://dihrbzcrqzorpnqtimae.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaHJiemNycXpvcnBucXRpbWFlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODA0MzAyNiwiZXhwIjoxOTYzNjE5MDI2fQ.o2pyr_Nk_OnAK3isP1hVHdl12WI5GFHckQV2uDuTJ9E"
);

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const me = {
  email,
  password,
  data: { name: "Daniel" },
  email_confirm: true,
};

exports.createDBUser = async function (userObject = me, database = supabase) {
  const result = await database.auth.api.createUser(userObject);
  return result;
};
