import PageWrapper from "./1-displaying cards/components/wrapper/PageWrapper";
import data from "./1-displaying cards/data";
import ImageGallery from "./2-Image Gallary/components/ImageGallery/ImageGallery";
import images from "./2-Image Gallary/data";
import Form from "./3-React Form/form";
import Convertor from "./4-Convertor/convertor";

function Practice1() {
  return <PageWrapper data={data}></PageWrapper>;
}

function Practice2() {
  return <ImageGallery images={images} />;
}


function Practice3() {
  return <Form />;
}

function Practice4() {
  return <Convertor />;
}

export default Practice1;
export { Practice2 };
export { Practice3 };
export { Practice4 };

