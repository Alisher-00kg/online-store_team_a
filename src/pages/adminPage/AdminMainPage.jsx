import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/thunks/addProductThunk";
import { AdminCardList } from "../../components/adminComponents/AdminCardList";

export const AdminMainPage = () => {
  const dispatch = useDispatch();
  const { items: products, isLoading } = useSelector((s) => s.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Wrapper>
      {isLoading ? (
        <p>Загрузка…</p>
      ) : products.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <AdminCardList array={products} />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 32px;
`;
