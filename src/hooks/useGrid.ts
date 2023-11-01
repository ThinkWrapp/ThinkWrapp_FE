import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import * as THREE from 'three';

export type GridMethodsType = {
    vector3ToGrid: (vector3: THREE.Vector3) => number[];
    gridToVector3: (gridPosition: number[], width?: number, height?: number) => THREE.Vector3;
};

export const useGrid = (): GridMethodsType | null => {
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);

    if (!roomJoined) return null;
    const { map } = roomJoined;

    const vector3ToGrid = (vector3: THREE.Vector3) => {
        return [Math.floor(vector3.x * map.gridDivision), Math.floor(vector3.z * map.gridDivision)];
    };

    const gridToVector3 = (gridPosition: number[], width = 1, height = 1) => {
        return new THREE.Vector3(
            width / map.gridDivision / 2 + gridPosition[0] / map.gridDivision,
            0,
            height / map.gridDivision / 2 + gridPosition[1] / map.gridDivision,
        );
    };

    return {
        vector3ToGrid,
        gridToVector3,
    };
};
