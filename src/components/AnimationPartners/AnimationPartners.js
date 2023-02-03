import ImgWrapper from "../ImageWrapper/ImgWrapper";

const AnimationPartners = () => {
  return (
    <>
      <div className="flex_row lucid_container animate_parallax overflow_x_hidden">
        <ImgWrapper
          cssClassDiv="lucid_block"
          cssClassImg="lucid_anim_img"
          src="assets/img_carousel_client1.jpg"
        />
      </div>
      <div className="flex_row lucid_container margin_bottom_med animate_parallax overflow_x_hidden">
        <ImgWrapper
          cssClassDiv="lucid_block"
          cssClassImg="client_anim_img"
          src="assets/img_carousel_client2.jpg"
        />
      </div>
    </>
  );
};

export default AnimationPartners;
