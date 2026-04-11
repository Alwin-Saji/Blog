import { IKImage } from 'imagekitio-react';


function ImageComponent({ className, src, h, w, alt }) {
  const isWebUrl = src?.startsWith("http");

  return (
    isWebUrl ? (
      <img
        src={src}
        className={className}
        loading="lazy"
        alt={alt}
        width={w}
        height={h}
      />
    ) : (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt}
        width={w}
        height={h}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
      />
    )
  );
}
export default ImageComponent;