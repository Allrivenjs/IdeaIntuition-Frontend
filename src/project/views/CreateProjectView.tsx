import { Button, Card, ChipButton, Heading, View } from '@/components/ui';
import { useState } from 'react';

const thematics = [
  {
    id: 1,
    name: '🧑‍💻 Programación',
    active: false,
  },
  {
    id: 2,
    name: '🧑‍🔬 Investigación',
    active: false,
  },
  {
    id: 3,
    name: '🧪 Química',
    active: false,
  },
  {
    id: 4,
    name: '📊 Finanzas',
    active: false,
  },
  {
    id: 5,
    name: '💻 Tecnología',
    active: false,
  },
];

const typeOfWork = [
  {
    id: 1,
    name: 'Articulo',
    active: false,
  },
  {
    id: 2,
    name: 'Investigación',
    active: false,
  },
  {
    id: 3,
    name: 'Trabajo de grado',
    active: false,
  },
  {
    id: 4,
    name: 'Tesis',
    active: false,
  },
];

const createSteps = [
  {
    id: 0,
    heading: 'Selecciona la tematica de tu proyecto',
    content: thematics,
  },
  {
    id: 1,
    heading: 'Selecciona un nivel de rigurosidad para tu proyecto',
    content: typeOfWork,
  },
];

export const CreateProjectView = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step + 1 >= createSteps.length) {
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const backStep = () => {
    if (step - 1 < 0) {
      return;
    }
    setStep((prevStep) => prevStep - 1);
  };

  //TODO:
  const onClickOnChip = (id: number) => {};

  return (
    <View>
      <Card width={600}>
        <Heading>{createSteps[step].heading}</Heading>
        <div className='flex flex-wrap'>
          {createSteps[step].content.map((content) => (
            <ChipButton
              onClick={() => onClickOnChip(0)}
              key={content.id}
              children={content.name}
            />
          ))}
        </div>
        <div className='flex w-full justify-end'>
          {step !== 0 && (
            <Button
              className='mt-9 mr-4'
              variant='outlined'
              rounded='full'
              size='sm'
              onClick={backStep}
            >
              Atras
            </Button>
          )}
          <Button
            className='mt-9'
            variant='contained'
            rounded='full'
            size='sm'
            onClick={nextStep}
          >
            Siguiente
          </Button>
        </div>
      </Card>
    </View>
  );
};
