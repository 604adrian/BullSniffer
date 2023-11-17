import ButtonTemplate from './ButtonTemplate.js';
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
    <ButtonTemplate backgroundColor={BACKGROUND_COLOUR}>
      <ImageButton
        colour={COLOUR}
        size={SIZE}
        onPress={pickImage}
        style={[ { button }, { flex: 1 } ]}
      />
      <Circle
        circleFunction={takePicture}
        colour={COLOUR}
        style={[ { button }, { flex: 2 } ]}
      />
      <FlipButton
        flipFunction={toggleCameraType}
        size={SIZE}
        colour={COLOUR}
        style={[ { button }, { flex: 3 } ]}
      />
    </ButtonTemplate>
  )
}
