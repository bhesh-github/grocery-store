import React, { useState } from "react";

const DisplayImage = ({ displayImageList }) => {
  const [selectedCarouselImg, setSelectedCarouselImg] = useState(0);

  const imageMoveOnMouseHover = (event) => {
    // getBoundingClientRect to get the position and dimensions of
    let element = document
      .getElementById("display_big_img_wrapper")
      .getBoundingClientRect();

    let scale = 2;
    // clientX and clientY take the position of cursor relative to the browser window size
    let x =
      -(((event.clientX - element.left) / element.width) * 100 - 50) /
      (scale / (scale - 1));
    let y =
      -(((event.clientY - element.top) / element.height) * 100 - 50) /
      (scale / (scale - 1));

    document.getElementById(
      "display_big_img"
    ).style.transform = `translate(${x}%,${y}%)`;
    document.getElementById("display_big_img").style.scale = `${scale}`;
  };

  const handleCarouselClick = (index, imgLink) => {
    document.getElementById("display_big_img").src = imgLink;
    setSelectedCarouselImg(index);

    // let left = document
    //   .getElementById("diplay_img_carousel")
    //   .getBoundingClientRect().left;

    // document.getElementById(`diplay_img_carousel_div`).scrollLeft =
    //   document.getElementById(`carousel_image_${index}`).offsetLeft - left;

    let nodeIndex = Array.prototype.indexOf.call(
      document.getElementsByClassName("carousel-image"),
      document.getElementById(`carousel_image_${index}`)
    );

    for (let i = 0; i < nodeIndex; i++) {
      document
        .getElementById(`diplay_img_carousel`)
        .appendChild(document.getElementById(`diplay_img_carousel`).firstChild);
    }
  };

  return (
    <div className="media display-img-wrapper ">
      <ul
        className="biolife-carousel slider-for displayed-img"
        data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".slider-nav"}'
      >
        {/* transition and events on the fixed wrapper element */}
        {displayImageList &&
          displayImageList.map((imgLink, idx) => (
            <li
              key={idx}
              className="display-big-img-wrapper"
              id="display_big_img_wrapper"
              onMouseMove={(event) => {
                imageMoveOnMouseHover(event);
              }}
              // on mouse out to ensure that everything moves as requires, transitions are done via js so this is required
              onMouseOut={() => {
                document.querySelector("#display_big_img").style.left = `0`;
                document.querySelector("#display_big_img").style.top = `0`;
                document.querySelector("#display_big_img").style.transform =
                  "none";
                document.getElementById("display_big_img").style.scale = `1`;
              }}
            >
              {/* image that is transformed */}
              <img
                src={imgLink}
                alt=""
                width="500"
                height="500"
                className="display-big-img"
                id="display_big_img"
              />
            </li>
          ))}
      </ul>
      <div className="carousel-outer">
        <ul
          className="display-img-carousel"
          id="diplay_img_carousel"
          data-slick='{"arrows":false,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":4,"slidesToScroll":1,"asNavFor":".slider-for"}'
        >
          {displayImageList &&
            displayImageList.map((imgLink, idx) => {
              return (
                <li key={idx}>
                  <img
                    src={imgLink}
                    alt=""
                    width="88"
                    height="88"
                    id={`carousel_image_${idx}`}
                    className={`carousel-image ${
                      selectedCarouselImg === idx
                        ? "carousel-image-active"
                        : "carousel-image-grey"
                    }`}
                    onClick={() => {
                      handleCarouselClick(idx, imgLink);
                    }}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default DisplayImage;
