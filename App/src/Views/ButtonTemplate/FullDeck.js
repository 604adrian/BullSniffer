import ButtonTemplate from './ButtonTemplate.js';
import ExitButton from '../../Buttons/ExitButton.js';
import SaveButton from '../../Buttons/SaveButton.js';
import ShareButton from '../../Buttons/ShareButton.js';

export default function FullDeck({ props }) {
  const {
    BACKGROUND_COLOUR,
    COLOUR,
    SIZE,
    button,
    backToImage,
    onSaveImage,
    onShareAsync,
    imageRef
  } = props;

  return (
    <ButtonTemplate backgroundColor={BACKGROUND_COLOUR}>
      <ExitButton 
        style={{ button }} 
        exitFunction={backToImage} 
        size={SIZE} 
        colour={COLOUR} 
      />
        <SaveButton
          colour={COLOUR} 
          onPress={onSaveImage} 
          style={{ button }} 
        />
      <ShareButton 
        style={{ button }} 
        colour={COLOUR} 
        size={SIZE} 
        onPress={onShareAsync} 
      />
    </ButtonTemplate>

  )
}
