import styled from 'styled-components';
import { LinkProps } from '.';
import { commonAttributes } from '@/styles';
import { Link } from 'react-router-dom';

type LinkStyleProps = Omit<LinkProps, 'children'>;

const CommonLink = commonAttributes(Link);
export const StyledLink = styled(CommonLink)<LinkStyleProps>``;
