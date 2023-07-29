import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import styled from "styled-components";

import logo from "../../img/logo.svg"
import avatar from "../../img/avatar.jpg"

export const Header = () => {
    return (
        <HeaderStyle>
            <LogoStyle>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="Stuff"/>
                </Link>
            </LogoStyle>
            <InfoStyle>
                <UserStyle>
                    <AvatarStyle style={{backgroundImage: `url(${avatar})`}}/>
                    <UsernameStyle>Guest</UsernameStyle>
                </UserStyle>
                <form>
                    <IconStyle>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                        </svg>
                    </IconStyle>
                    <InputStyle
                        type="search"
                        name="search"
                        placeholder="Search for anything..."
                        autoComplete="off"
                        onChange={() => {
                        }}
                        value=""
                    />

                    <div>

                    </div>
                </form>
                <AccountStyle>
                    <Link to={ROUTES.HOME}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                        </svg>
                    </Link>

                    <Link to={ROUTES.CART}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                        </svg>
                    </Link>
                    <span>2</span>
                </AccountStyle>
            </InfoStyle>
        </HeaderStyle>
    );
};


const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px 20px;
`

const LogoStyle = styled.div`
  width: 304px;
`

const InfoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  form {
    display: flex;
    align-items: center;
    background: var(--dark);
    border-radius: 6px;
    height: 27px;
    padding: 7px 10px;
    column-gap: 16px;
    width: 300px;
    position: relative;
  }
`

const UserStyle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
`

const AvatarStyle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--dark);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const UsernameStyle = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: var(--grey);
`

const IconStyle = styled.div`
  width: 13px;
  height: 13px;
  svg {
    width: 100%;
    height: 100%;
    fill: var(--dark-sea);
  }
`

const InputStyle = styled.input`
  flex-grow: 1;
  font-family: Montserrat, Roboto, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: var(--grey);
  background: none;
  outline: none;
  width: 100%;
`

const AccountStyle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`