import ButtonTemplateRight from './ButtonTemplateRight.js';
import ImageButton from '../../Buttons/ImagesButton.js';
import Circle from '../../Buttons/CircleView.js';
import FlipButton from '../../Buttons/FlipButton.js';

export default function FullSnap({props}) {
  const {
    BACKGROUND_COLOUR,
    COLOUR,
    SIZE,
    button,
    pickImage,
    takePicture,
    toggleCameraType
  } = props;

  return (
    <ButtonTemplateRight backgroundColor={BACKGROUND_COLOUR}>
      <ImageButton
        colour={COLOUR}
        size={SIZE}
        onPress={pickImage}
        style={[ { button }, { flex: 1 } ]}
      />
      <Circle
        style={[ { button }, { flex: 2 } ]}
        circleFunction={takePicture}
        colour={COLOUR}
      />
      <FlipButton
        style={[ { button }, { flex: 3 } ]}
        flipFunction={toggleCameraType}
        size={SIZE}
        colour={COLOUR}
      />
    </ButtonTemplateRight>
  )
}
