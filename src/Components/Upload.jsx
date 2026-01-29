import { IKContext, IKUpload } from 'imagekitio-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

function Upload({children,type,setData,setProgress}){
    
   const onError=  (err)=> {
    console.log("Error", err);
    toast.error("Image upload failed. Please try again.");
  }
  const onSuccess=  (res)=> {
    console.log("Success", res);
    setData(res);
  }
  const uploadProgress=  (progress)=> {
    console.log("Success", progress);
    setProgress(Math.round((progress.loaded/progress.total)*100));
  }

 const authenticator =  async () => {
      try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);
      
          if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Request failed with status ${response.status}: ${errorText}`);
          }
      
          const data = await response.json();
          const { signature, expire, token } = data;
          return { signature, expire, token };
      } catch (error) {
          throw new Error(`Authentication request failed: ${error.message}`);
      }
  };

  const ref=useRef(null);


    return(
       <IKContext 
       publicKey={import.meta.env.VITE_IK_PUBLIC_KEY} 
       urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
       authenticator={authenticator} 
       >
        <IKUpload
          useUniqueFileName={true}
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={uploadProgress}
          className="hidden"
          ref={ref}
          type={`${type}/*`}          
          />
       <div className='' onClick={() => ref.current.click()}>{children}</div>
        </IKContext>
    )
}
export default Upload;