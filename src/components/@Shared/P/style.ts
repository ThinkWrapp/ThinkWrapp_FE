import styled from 'styled-components';
import { PProps } from '.';
import { commonAttributes } from '@/styles';

type PStyleProps = Omit<PProps, 'children'>;

const CommonP = commonAttributes('p');
export const StyledP = styled(CommonP)<PStyleProps>``;
