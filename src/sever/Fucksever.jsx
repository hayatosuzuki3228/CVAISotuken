import { postData } from "./api";

export function Fuckserver() {
  const data = {
    email: "hoge@hoge.hoge",
    password: "hoge0000",
  };
  const data2 = {
    email: "plaseadomin.admin",
    pass: "Fuck",
  };
  const handleFuckserver = (event) => {
    postData("authentication/student", data);

    //postData("registration/admin", data2);
  };
  return <button onClick={handleFuckserver} />;
}
