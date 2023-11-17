import ButtonTemplateRight from './ButtonTemplateRight.js';
import ExitButton from '../../Buttons/ExitButton.js';
import SaveButton from '../../Buttons/SaveButton.js';
import ShareButton from '../../Buttons/ShareButton.js';

export default function FullDeckRight({ props }) {
  const {
    BACKGROUND_COLOUR,
    COLOUR,
    SIZE,
    button,
    backToImage,
    onSaveImage,
    onShareAsync,
  } = props;

  return (
    <ButtonTemplateRight
      backgroundColor={BACKGROUND_COLOUR}
      style={{ zIndex: 1, flex: 3 }}
    >
      <ExitButton 
        style={{ button, flex: 1 }} 
        exitFunction={backToImage} 
        size={SIZE} 
        colour={COLOUR} 
      />
        <SaveButton
          colour={COLOUR} 
          onPress={onSaveImage} 
          style={{ button, flex: 2 }}
        />
      <ShareButton 
        style={{ button, flex: 3 }} 
        colour={COLOUR} 
        size={SIZE} 
        onPress={onShareAsync} 
      />
    </ButtonTemplateRight>
  )
}
