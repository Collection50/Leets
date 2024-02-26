'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Teams = styled.div`
  font-size: 30px;

  @media screen and (max-width: 680px) {
    font-size: 24px;
  }
`;

export const ContributorsContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  margin-bottom: 30vh;
`;

export const ContributorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 50px;

  margin-top: 6vw;
`;

export const Contributor = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  border-radius: 30px;
  color: white;
`;

export const ContributorImageWrapper = styled.div`
  position: relative;

  transition: all 250ms ease;

  &:hover {
    filter: drop-shadow(0 0 0.5rem white);
    scale: 1.02;
  }

  height: 240px;
`;

export const ContributorImage = styled(Image)`
  border-radius: 12px;
  object-position: center center;
`;
