import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        tag: 'input',
        type: 'text',
        name: 'name',
        'cf-questions': 'May I know your name?',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'yes',
        'cf-questions':
          'Do you mind if I ask some questions to learn more about you?',
        'cf-label': 'Nope',
        value: 'yes',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'yes',
        'cf-label': 'Go Ahead',
        value: 'yes',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-questions': `Great! Let's get started. What's on your mind today ?`,
        'cf-label': 'relationships',
        value: 'first',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'Exams',
        value: 'second',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'Health',
        value: '3rd',
      },

      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'finance',
        value: '4th',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'society',
        value: '5th',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'work',
        value: '6th',
      },

      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'school/college',
        value: 'second',
      },
      
      {
        tag: 'input',
        type: 'radio',
        name: 'p',
        'cf-label': 'blank',
        value: 'second',
      },
     
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Good',
        score:'1',
        'cf-image': 'https://openmoji.org/data/color/svg/1F60C.svg',
        tabindex: '1',
        value: 'good',
      },

      

      
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Meh',
        'cf-image': 'https://openmoji.org/data/color/svg/1F610.svg',
        tabindex: '2',
        value: 'meh',
        score:'2',
      },

      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'stressed',
        'cf-image': 'https://openmoji.org/data/color/svg/1F610.svg',
        tabindex: '3',
        score:'3',
        value: 'exams',
      },

      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Anxious',
        'cf-image': 'https://openmoji.org/data/color/svg/1F630.svg',
        tabindex: '4',
        score:'4',
        value: 'anxious',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Sad',
        'cf-image': 'https://openmoji.org/data/color/svg/1F641.svg',
        tabindex: '5',
        value: 'sad',
        score:'4',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'frustated',
        'cf-image': 'https://openmoji.org/data/color/svg/1F630.svg',
        tabindex: '6',
        value: 'frustated',
        score:'5',
      },


      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'frustated',
        'cf-image': 'https://openmoji.org/data/color/svg/1F630.svg',
        tabindex: '7',
        score:'6',
        value: 'not sure how i feel',
      },
      {
        tag: 'input',
        type: 'text',
        name: 'reason',
        'cf-questions': 'Could you tell me why you feel that way?',
      },
      


    ];

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        theme: 'dark',
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        loadExternalStyleSheet: true,
        robotImage: 'https://static.crozdesk.com/web_app_library/providers/logos/000/003/155/original/chatbots-builder-1510149769-logo.png?1510149769',
      },
      tags: this.formFields,
    });
    this.cf.addRobotChatResponse(
      'Hi There! Welcome to our website! My name is Heal-o-Bot and I will be helping you today.'
    );
    this.elem.appendChild(this.cf.el);
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log('Formdata, obj:', formDataSerialized);
    this.cf.addRobotChatResponse(
      'Dont push past memories deeper inside of yourself. Let those memories breathe and let old wounds heal. I hope you have a great day!!' );
  }

  render() {
    return (
      // <div style={{ height: 100, backgroundColor: 'black' }}>
      <div ref={(ref) => (this.elem = ref)} style={{ marginTop: 10 }} />
      // </div>
    );
  }
}