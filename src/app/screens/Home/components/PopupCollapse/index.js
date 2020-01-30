import React, { useState} from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { styles } from './style';
import IconMa from 'react-native-vector-icons/MaterialIcons'

export const PopupCollapse = ({children, title}) => {
    const [isOpened, setIsOpened] = useState(false);

    return(
        <Collapse onToggle={(isCollapsed) => setIsOpened(isCollapsed)}>
            <CollapseHeader>
                <View style={styles.collapseHeader}>
                    <Text style={styles.collapseTitle}>{title}</Text>
                    {
                        isOpened ? 
                        <IconMa name="arrow-drop-up" size={30} color="gray" /> :
                        <IconMa name="arrow-drop-down" size={30} color="gray" />
                    }
                </View>
            </CollapseHeader>
            <CollapseBody>
                {children}
            </CollapseBody>
        </Collapse>
    )
}