/* Source: the supplied textbook image, page 27. */
'use strict';
const LESSON = {
  dialogue: [
    {speaker:'Michael',text:'Are you going to Saudi Arabia on business or vacation?',ar:'هل ستذهب إلى السعودية للعمل أم لقضاء إجازة؟'},
    {speaker:'Mr. Parker',text:'I’m going on business. My company has a branch in Riyadh. I’m attending a conference tomorrow morning, and then I’ll probably fly back home to London next week. How about you?',ar:'سأذهب للعمل. لشركتي فرع في الرياض. سأحضر مؤتمرًا صباح الغد، ثم سأعود غالبًا بالطائرة إلى منزلي في لندن الأسبوع المقبل. وماذا عنك؟'},
    {speaker:'Michael',text:'I’m going to Saudi Arabia to study Arabic at King Khalid University. I’m an exchange student.',ar:'سأذهب إلى السعودية لدراسة اللغة العربية في جامعة الملك خالد. أنا طالب تبادل.'},
    {speaker:'Mr. Parker',text:'How long are you staying?',ar:'كم ستبقى؟'},
    {speaker:'Michael',text:'For a year, in Abha. Have you been there?',ar:'سأبقى سنة في أبها. هل سبق أن زرتها؟'},
    {speaker:'Mr. Parker',text:'Yes, I have. It’s very nice. Wonderful climate, but kind of slow for me, compared to Riyadh.',ar:'نعم، زرتها. إنها جميلة جدًا ومناخها رائع، لكن وتيرة الحياة فيها هادئة نوعًا ما بالنسبة لي مقارنة بالرياض.'},
    {speaker:'Michael',text:'How’s your Arabic?',ar:'كيف مستواك في اللغة العربية؟'},
    {speaker:'Mr. Parker',text:'Pretty good. I lived in Dubai for a while.',ar:'جيد إلى حد كبير. عشت في دبي فترة من الزمن.'},
    {speaker:'Michael',text:'Well, I still make a lot of mistakes in Arabic, but my Arab friends say I have a good accent.',ar:'حسنًا، ما زلت أرتكب أخطاء كثيرة في العربية، لكن أصدقائي العرب يقولون إن لدي لكنة جيدة.'},
    {speaker:'Mr. Parker',text:'I’m sure you’ll pick up the language quickly.',ar:'أنا واثق أنك ستتعلم اللغة بسرعة.'}
  ],
  phrases: [
    {phrase:'kind of',meaning:'in some ways / slightly',ar:'نوعًا ما / إلى حدّ ما',quote:'“…kind of slow for me, compared to Riyadh.”',example:'The trip is kind of long.',exampleAr:'الرحلة طويلة نوعًا ما.'},
    {phrase:'pretty',meaning:'very / quite',ar:'جدًا / إلى حدّ كبير — حسب السياق',quote:'“Pretty good.”',example:'My Arabic is pretty good.',exampleAr:'مستواي في العربية جيد إلى حدّ كبير.'},
    {phrase:'pick up',meaning:'learn',ar:'يتعلّم — المقصود هنا تعلّم اللغة',quote:'“I’m sure you’ll pick up the language quickly.”',example:'I want to pick up the language.',exampleAr:'أريد أن أتعلّم اللغة.'}
  ],
  questions: [
    {person:'Michael',q:'Why is he going to Saudi Arabia?',options:['To attend a conference.','To study Arabic at King Khalid University.','To visit his company’s branch.'],correct:1,answer:'To study Arabic at King Khalid University.',evidence:'“I’m going to Saudi Arabia to study Arabic at King Khalid University.”',ar:'سيذهب لدراسة اللغة العربية في جامعة الملك خالد.'},
    {person:'Michael',q:'How long is he staying?',options:['For a year.','Until tomorrow morning.','Until next week.'],correct:0,answer:'For a year.',evidence:'“For a year, in Abha.”',ar:'سيبقى لمدة سنة.'},
    {person:'Michael',q:'What’s his Arabic like?',options:['He says it is pretty good.','He says he makes no mistakes.','He makes a lot of mistakes, but his friends say he has a good accent.'],correct:2,answer:'He makes a lot of mistakes, but has a good accent according to his Arab friends.',evidence:'“I still make a lot of mistakes in Arabic, but my Arab friends say I have a good accent.”',ar:'يرتكب أخطاء كثيرة، لكن أصدقاءه العرب يقولون إن لديه لكنة جيدة.'},
    {person:'Michael',q:'In which city is he going to stay?',options:['London.','Abha.','Riyadh.'],correct:1,answer:'Abha.',evidence:'“For a year, in Abha.”',ar:'سيقيم في أبها.'},
    {person:'Mr. Parker',q:'Why is he going to Saudi Arabia?',options:['On business, including attending a conference.','To study Arabic as an exchange student.','On vacation.'],correct:0,answer:'On business; he is attending a conference.',evidence:'“I’m going on business.” / “I’m attending a conference tomorrow morning…”',ar:'سيذهب للعمل وحضور مؤتمر.'},
    {person:'Mr. Parker',q:'How long is he staying?',options:['For a year.','For exactly seven days.','He will probably fly home next week; the exact length is not stated.'],correct:2,answer:'Probably until next week; the exact length is not stated.',evidence:'“…I’ll probably fly back home to London next week.”',ar:'سيعود غالبًا الأسبوع المقبل؛ المدة الدقيقة غير مذكورة.'},
    {person:'Mr. Parker',q:'What’s his Arabic like?',options:['He says he makes a lot of mistakes.','Pretty good.','He does not know any Arabic.'],correct:1,answer:'Pretty good.',evidence:'“Pretty good. I lived in Dubai for a while.”',ar:'يقول إن مستواه جيد إلى حدّ كبير.'},
    {person:'Mr. Parker',q:'In which city is he going to stay?',options:['Riyadh is implied by the conversation.','Abha is explicitly stated.','London is his destination in Saudi Arabia.'],correct:0,answer:'Riyadh (inferred from the conversation).',evidence:'“My company has a branch in Riyadh.”',ar:'[استنتاج] الرياض هي الإجابة المستدل عليها من ذكر فرع الشركة؛ لم يقل صراحةً إنه سيقيم فيها.',inference:true}
  ],
  cues:[
    {cue:'Where / stay?',question:'Where are you going to stay?',reply:'I’m going to stay in Abha.',ar:'أين ستقيم؟ — سأقيم في أبها.'},
    {cue:'Why / go / name of place?',question:'Why are you going to Saudi Arabia?',reply:'I’m going to study Arabic.',ar:'لماذا ستذهب إلى السعودية؟ — سأذهب لدراسة العربية.'},
    {cue:'How long / stay?',question:'How long are you staying?',reply:'I’m staying for a year.',ar:'كم ستبقى؟ — سأبقى سنة.'}
  ]
};
const Practice = {
  key:'conversation-page27-v1',
  empty:()=>({answers:Array(8).fill(null),arabic:true,swapped:false}),
  normalize(raw){const state=this.empty();if(!raw||typeof raw!=='object')return state;state.arabic=raw.arabic!==false;state.swapped=raw.swapped===true;LESSON.questions.forEach((q,i)=>{const v=raw.answers?.[i];if(Number.isInteger(v)&&v>=0&&v<q.options.length)state.answers[i]=v;});return state;},
  score(state){return LESSON.questions.reduce((n,q,i)=>n+(state.answers[i]===q.correct?1:0),0);},
  answered(state){return state.answers.filter(v=>v!==null).length;}
};
if(typeof module!=='undefined'&&module.exports)module.exports={LESSON,Practice};
