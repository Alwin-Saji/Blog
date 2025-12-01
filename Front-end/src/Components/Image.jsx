function ImageComponent({ className, src, h, w, alt }) {

   return (
    <img
      src={src}
      className={className}
      width={w}
      height={h}
      alt={alt}
     transformation={[
      { 
      width:w,
      height:h,
      }
     ]}

    />
  );
}
export default ImageComponent;