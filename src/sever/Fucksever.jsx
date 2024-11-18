import { postData } from "./api";

export function Fuckserver() {
  const data = {
    email: "root",
    password: "root",
  };
  const data2 = {
    email: "plaseadomin.admin",
    pass: "Fuck",
  };
  const handleFuckserver = (event) => {
    postData("authentication/admin", data);

    postData("registration/admin", data2);
  };
  return <button onClick={handleFuckserver} />;
}
