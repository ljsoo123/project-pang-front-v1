import React from 'react'
import * as S from './styles'
import ExperienceItem from './ExperienceItem'

const ExperienceContents = ({user}) => {
    return(
    <> 
        <S.ExperienceMainDiv>
            {user.map(users => (
                <ExperienceItem users={users}></ExperienceItem>
            ))}
        </S.ExperienceMainDiv>
           </>
    )
}

export default ExperienceContents;