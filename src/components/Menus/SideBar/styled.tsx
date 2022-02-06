import styled from 'styled-components';


export const SideBarNav = styled.nav`

    width: 100%;
    > div {
        font-size: 2em;
        font-weight: 100;
    }
    > ul {
        margin:0; 
        padding:0;
        display: flex;
        flex-direction: column;
        align-item: flex-start;
        > li {
          span.label{
            display:none;
          }
            line-height: 50px;
            list-style: none;
            min-width: 100px;
            margin-top: 5%;
            text-align: center;
            &:hover{
              span.label{
                span.label{
                  display: flex;
                }
              }
            }
        }
    }

`