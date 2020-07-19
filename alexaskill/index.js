// Include the Alexa SDK v2
const Alexa = require("ask-sdk-core");
const actions = require('./functions');
const Purpose = {
  thelark: [
    " Purpose is empowering playwrights by providing transformative support within a global community.It is an international theater laboratory, based in New York City."
    ],
  ahrcnewyorkcityfoundation: [
    " Purpose is empowering people with intellectual and developmental disabilities to make decisions on their own aspirations."
    ],
  equaljusticeamerica: [
    " Purpose is providing opportunities for law students and lawyers to work with organizations that deliver civil legal services to those most in need."
    ],
  nonprofitslist: [
    " Here are some of the nonprofits I recommend for donation : equaljusticeamerica,thelark,ahrcnewyorkcityfoundation."
    ]
};

// The "LaunchRequest" intent handler - called when the skill is launched
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    const speechText = "Hello, I am Craigs Donor. I can give you the recommended list of non profits. You can say ask craigs donor on nonprofitslist ";
    const repromptText = "You can ask me more information, how can I help?";

    // Speak out the speechText via Alexa
    return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt(repromptText)
    .getResponse();
  }
};


//Handler for NonProfits
const NonProfitsPurpose= {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "NonProfitsPurpose"
    );
  },
  handle(handlerInput) {
    console.log("non profit Intent handler called");

    // Get the nonprofit name
   
    let nonprofits = handlerInput.requestEnvelope.request.intent.slots.nonprofits.value;
    let getNGO = actions.getNGO(Purpose, nonprofits);

    if (!getNGO) {
      return UnhandledHandler.handle(handlerInput);
    }

    nonprofits = getNGO[0];
    let purpose = getNGO[1];

    let cardTitle = nonprofits ;
    let cardContent = purpose;
   let speechText = nonprofits + purpose;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(cardTitle, cardContent)
      .getResponse();
  }
};



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Help on how to pay using AmazonPay?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// Unhandled Requests
const UnhandledHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error Handler : ${error.message}`);

    return handlerInput.responseBuilder
      .speak(
        "Sorry, I am unable to understand what you said. You can ask me to say  information on non profits in your area"
      )
      .getResponse();
  }
};

// Register the handlers and make them ready for use in Lambda
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    NonProfitsPurpose,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
    )
  .addErrorHandlers(UnhandledHandler)
  .lambda();

