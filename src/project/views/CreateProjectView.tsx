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
    heading: 'Selecciona la tecnologia que deseas utilizar',
    content: typeOfTechnology,
  },
  {
    id: 3,
    heading: 'Selecciona el enfoque de tu proyecto',
    content: typeOfFocus,
  },
  {
    id: 4,
    heading: 'Danos una breve descripción de lo que deseas realizar',
    content: [],
  }
];

interface CreateProjectViewData {
  step: {
    id: number;
    value: string;
    step: number;
  }[],
}

const idMatchToSend = [
  {
    id: 0,
    value: "course"
  },
  {
    id: 1,
    value: "requirements"
  },
  {
    id: 2,
    value: "technology"
  },
  {
    id: 3,
    value: "approach"
  },
  {
    id: 4,
    value: "context"
  }
]

export const CreateProjectView = () => {
  const [step, setStep] = useState(0);
  const [description, setDescription] = useState("");
  const [data, setData] = useState<CreateProjectViewData>({
    step: [],
  });
  const nextStep = () => {
    if (step + 1 >= createSteps.length) {
      return;
    }
    const s = data.step.find(v => v.step === step)
    if (!s){
      alert('Debe selecionar uno.')
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

  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  }

  //TODO:
  const onClickOnChip = (id: number) => {
    const name = createSteps[step].content.find((content) => content.id === id)?.name;

    if (!name) {
      alert("No se encontró el nombre del chip");
      return;
    }

    const updatedStep = {
      id,
      value: name,
      step
    };

    const existingIndex = data.step.findIndex((item) => item.step === step);

    if (existingIndex !== -1) {
      setData((prevData) => ({
        ...prevData,
        step: [
          ...prevData.step.slice(0, existingIndex),
          updatedStep,
          ...prevData.step.slice(existingIndex + 1)
        ]
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        step: [...prevData.step, updatedStep]
      }));
    }
  };

  const send = () => {
    let send = {
      "type_project":"",
      "approach": "",
      "requirements": "",
      "course": "",
      "technology": "",
      "context": "",
      "user_id": 1
    }
    data.step.forEach((value, index) =>{
       const el = idMatchToSend.find( v => v.id = value.step);
       console.log(value, el)
       if (el?.id == 4){
         send = {
           ...send,
            "context": description
         }
         return;
       }
       if (el?.id == 1){
         send = {
           ...send,
           "type_project": value.value,
           "requirements": value.value
         }
         return;
       }
       if (el){
         send = {
           ...send,
           [el.value]: value.value
         }
       }
    })

  }

  console.log(data)

  return (
    <View>
      <Card width={600}>
        <Heading>{createSteps[step].heading}</Heading>
        <div className={ 'flex flex-wrap mb-6' + (createSteps[step].content.length === 0 ? ' w-full' : '') }>
          { createSteps[step].content.length === 0 ?
              <div className="w-full">
                <textarea id="message" rows={4} value={description} maxLength={500} onChange={handleDescription} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Escribe aqui...">

                </textarea>

              </div>
              :
              createSteps[step].content.map((content) => (
              <ChipButton
                onClick={() => onClickOnChip(content.id)}
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
          {
            step === createSteps.length - 1 ?
                (<Button
                    className='mt-9'
                    variant='contained'
                    rounded='full'
                    size='sm'
                    onClick={send}
                >
                  Enviar
                </Button>)
                :
                (<Button
                    className='mt-9'
                    variant='contained'
                    rounded='full'
                    size='sm'
                    onClick={nextStep}
                >
                  Siguiente
                </Button>)
          }
        </div>
      </Card>
    </View>
  );
};
