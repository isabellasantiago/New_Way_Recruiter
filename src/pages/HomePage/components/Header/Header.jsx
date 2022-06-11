import React, {useContext} from 'react';
import { AuthContext } from '../../../../services/context/auth2';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import {Header} from './styles'

export const HeaderNav = () => {
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <Header>
                <button onClick={handleLogout}>
                    <MeetingRoomIcon fontSize='large' fontColor='#fff'/> 
                </button>
            </Header>
        </>
    )
}