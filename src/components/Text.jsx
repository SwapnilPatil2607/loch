import styled from "styled-components";

export const Text = ({ type, color, children, opacity }) => {
  return (
    <>
      {
        {
          small: <SmallText color={color}>{children}</SmallText>,
          verySmall: <VerySmallText color={color}>{children}</VerySmallText>,
          medium: (
            <MediumText opacity={opacity} color={color}>
              {children}{" "}
            </MediumText>
          ),
          label: <Label color={color}>{children}</Label>,
          H4: <H4 color={color}>{children}</H4>,
          H5: <H5 color={color}>{children}</H5>,
          H3: <H3 color={color}>{children}</H3>,
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
  text-align: ${({ align }) => align};
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
  text-align: ${({ align }) => align};
`;

const MediumText = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ color }) => color};
  font-size: 16px;
  text-align: ${({ align }) => align};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  opacity: ${({ opacity }) => opacity};
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
  text-align: ${({ align }) => align};
`;

const H5 = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ color }) => color};
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 30px */
  text-align: ${({ align }) => align};
`;

const H3 = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ color }) => color};
  font-size: 39px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 46.8px */
  text-align: ${({ align }) => align};
`;

const Label = styled.p`
  margin: 0;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Roboto+Condensed:wght@600&display=swap");
  font-family: "Inter", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ color }) => color};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  text-align: ${({ align }) => align};
`;
