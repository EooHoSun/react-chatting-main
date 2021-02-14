import ButtonAppBar from './AppBar';
import FullWidthTabs from './SelectChatTab';
import ButtonRoom from './ButtonRoom';
import ChipsRoom from './ChipsRoom';

export default function ChattingList(props){
    console.log('1',{...props});
    return(
        <div>
            <ButtonAppBar></ButtonAppBar>
            <ChipsRoom></ChipsRoom>
            <FullWidthTabs props={{...props}}></FullWidthTabs>
            <ButtonRoom></ButtonRoom>
        </div>
    );
}