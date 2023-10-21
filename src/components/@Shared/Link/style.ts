import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { commonAttributesLink } from '@/styles';

const CommonLink = commonAttributesLink(Link);
export const StyledLink = styled(CommonLink)<LinkProps>``;
