import styled from "styled-components";
import Anonim from "./anonim.svg?react";
import Bug from "./bug.svg?react";
import Children from "./children.svg?react";
import CopyPaper from "./copy_paper.svg?react";
import Copyright from "./copyright.svg?react";
import EditBasket from "./edit_basket.svg?react";
import Filter from "./filter.svg?react";
import Galarary from "./galarary.svg?react";
import GreenHeart from "./green_heart.svg?react";
import GreenRightArrow from "./green_right_arrow.svg?react";
import Heart from "./heart.svg?react";
import LeftArrow from "./left_arrow.svg?react";
import Man from "./man.svg?react";
import Minus from "./minus.svg?react";
import Paint from "./paint.svg?react";
import Plus from "./plus.svg?react";
import RightArrow from "./right_arrow.svg?react";
import SearchIcon from "./search_icon.svg?react";
import TopArrow from "./top_arrow.svg?react";
import UEye from "./u_eye.svg?react";
import UUser from "./u_user.svg?react";
import Woman from "./woman.svg?react";
import X from "./x.svg?react";

const Styled10 = (Component) => styled(Component)`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

const Styled13 = (Component) => styled(Component)`
  width: 13px;
  height: 13px;
  cursor: pointer;
`;

const Styled20 = (Component) => styled(Component)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Styled23 = (Component) => styled(Component)`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

const Styled24 = (Component) => styled(Component)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const StyledArrow = (Component) => styled(Component)`
  width: 10px;
  height: 16px;
  cursor: pointer;
`;

export const Icons = {
  Anonim: Styled24(Anonim),
  Bug: Styled24(Bug),
  Children: Styled24(Children),
  CopyPaper: Styled24(CopyPaper),
  Copyright: Styled13(Copyright),
  EditBasket: Styled24(EditBasket),
  Filter: Styled24(Filter),
  Galarary: Styled24(Galarary),
  GreenHeart: Styled24(GreenHeart),
  GreenRightArrow: StyledArrow(GreenRightArrow),
  Heart: Styled24(Heart),
  LeftArrow: StyledArrow(LeftArrow),
  Man: Styled24(Man),
  Minus: Styled20(Minus),
  Paint: Styled24(Paint),
  Plus: Styled20(Plus),
  RightArrow: StyledArrow(RightArrow),
  SearchIcon: Styled23(SearchIcon),
  TopArrow: StyledArrow(TopArrow),
  UEye: Styled24(UEye),
  UUser: Styled24(UUser),
  Woman: Styled24(Woman),
  X: Styled10(X),
};
