import axios from "axios";
const backendUrl = "http://localhost:5001";

export async function getUser(id: string, pass: string) {
  try {
    await axios({
      method: "POST",
      url: backendUrl + "foo",
      data: {
        id,
        pass,
      },
    }).then((res) => res.data);
  } catch (err) {
    console.error(err);
    return null;
  }
}
