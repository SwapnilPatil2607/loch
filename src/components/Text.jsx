import styled from "styled-components";

export const Text = ({ type, color, children }) => {
  return (
    <>
      {
        {
          small: <SmallText color={color}>{children}</SmallText>,
          verySmall: <VerySmallText color={color}>{children}</VerySmallText>,
          medium: <MediumText color={color}>{children} </MediumText>,
          H4:<H4 color={color}>{children}</H4>
        }[type]
      }
    </>
  );
};

const SmallText = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  font-size: 11.2px;
  line-height: 13.44px;
  color: ${({ color }) => color};
`;

const VerySmallText = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  font-size: 9.1px;
  line-height: 10.92px;
  color: ${({ color }) => color};
`;

const MediumText = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  line-height: 19.2px;
`;

const H4 = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ color }) => color};
  font-size: 31px;
  font-weight: 500;
  line-height: 120%; /* 37.2px */
`;
