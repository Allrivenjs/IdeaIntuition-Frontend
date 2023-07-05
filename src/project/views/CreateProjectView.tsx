import { Button, Card, ChipButton, Heading, View } from '@/components/ui';
import {useEffect, useState} from 'react';

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

const typeOfTechnology = [
  {
    id: 1,
    name: 'Desarrollo web',
    active: false,
  },
  {
    id: 2,
    name: 'Desarrollo mobile',
    active: false,
  },
  {
    id: 3,
    name: 'Desarrollo desktop',
    active: false,
  },
  {
    id: 4,
    name: 'Desarrollo de videojuegos',
    active: false,
  },
  {
    id: 5,
    name: 'Seguridad',
    active: false,
  },
];

const typeOfFocus = [
  {
    id: 1,
    name: 'Desarrollo de aplicaciones',
    active: false,
  },
  {
    id: 2,
    name: 'Desarrollo de infraestructura',
    active: false,
  },
  {
    id: 3,
    name: 'Investigación',
    active: false,
  },
  {
    id: 4,
    name: 'Desarrollo de videojuegos',
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
    heading: 'Selecciona el tipo de proyecto que deseas realizar',
    content: typeOfWork,
  },
  {
    id: 2,
    heading: 'Selecciona un nivel de rigurosidad para tu proyecto',
    content: typeOfWork,
  },
  {
    id: 3,
    heading: 'Selecciona la tecnologia que deseas utilizar',
    content: typeOfTechnology,
  },
  {
    id: 4,
    heading: 'Selecciona el enfoque de tu proyecto',
    content: typeOfFocus,
  },
  {
    id: 5,
    heading: 'Danos una breve descripción de lo que deseas realizar',
    content: [],
  }
];

export const CreateProjectView = () => {
  const [step, setStep] = useState(0);
  const [description, setDescription] = useState("");

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
      <Card width={700}>
        <Heading>{createSteps[step].heading}</Heading>
        <div className='flex flex-wrap w-full mb-6'>
          { createSteps[step].content.length === 0 ?
              <div className="w-full ">
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Escribe aqui...">

                </textarea>

              </div>
              :
              createSteps[step].content.map((content) => (
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
