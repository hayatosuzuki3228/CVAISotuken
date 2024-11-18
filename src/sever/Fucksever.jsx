import { postData } from "./api";

export function Fuckserver() {
    const data = {
        email: "コンチニハサーバーヲコワシニキマシタ",
        password: "11111aaa",
      };
    const handleFuckserver = (event) =>{
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
        postData("registration/student", data)
    }
    return(
        <button onClick={handleFuckserver}/>
    );
}
