// import axios from "axios";

// const uploadToImageKit = async (file) => {
//     const apiKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
//     const url = "https://ik.imagekit.io/zfxusaqpq"

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("fileName", file.name);

//     try {
//         const response = await axios.post(url, formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//                 Authorization: `Basic ${btoa(apiKey + ":")}`,
//             },
//         });

//         return response.data.url;
//     } catch (err) {
//         console.error("ImageKit Upload Error:", err);
//         return null;
//     }
// };

// export default uploadToImageKit;




import ImageKit from 'imagekit-javascript';

const uploadToImageKit = async (file) => {
  const authRes = await fetch('/api/imageuploadapi/imagekit');
  const authParams = await authRes.json();

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
    authenticationEndpoint: "/api/imageuploadapi/imagekit",
  });

  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file,
        fileName: file.name,
        tags: ["blog"],
        useUniqueFileName: true,
        ...authParams
      },
      (err, result) => {
        if (err) {
          console.error("Upload error", err);
          reject(err);
        } else {
          resolve(result.url);
        }
      }
    );
  });
};


export default uploadToImageKit

