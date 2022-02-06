import styled from 'styled-components';

export const SideBarNav = styled.nav`
   
width: 100%;
 > div {
    font-size: 2em;
    font-weigth:100;
 }  
  >  ul {
        mergin: 0;
        padding: 0;
        display:flex;
        > li {
          list-astyle: none;
          min-width: 100px;
          text-aling: center;
          &:hover{
            border-bottom: solid 2px orange;
          }
        }
     }
 }
 
`