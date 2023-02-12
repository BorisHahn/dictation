const dictations = [
  {
    name: 'Серый кот',
    text: `На каменных ступенях мног{0}этажного дома лежал обычный серый кот. Рано утром, пока на улице было малолюдно, он выбирался из подвала и грелся на весе{1}нем солнышке.
    В подвале, где ему приходилось жить, было грязно, сыро и неуютно. Длинными холодными ночами кот лежал на теплой трубе, пытаясь согреться. 
    Он сворачивался в клубок, прикрывал лапой нос. А утром, едва забрезжит рассвет, серый полосатый кот уже сидел на привычном крыльце.
    Этот день ничем не отличался от остальных. Так же, как всегда, дверь под{2}езда хлопнула, из него выскочили два брата-близнеца.
    Кот едва успел отпрыгнуть в сторону. Мальчишки были так заняты собой{3} что не обратили на него никакого внимания.
    Кот вернулся на нагретое солнышком место и улегся на крыльце. Неподалеку села и чирикнула птичка, но, увидев кота, тут же взлетела на дерево.
    Сквозь прищуренные веки он наблюдал за прыгающими по земле птицами, но те держались на безопасном расстоянии.`,
    questions: [
      {
        answers: ['о', 'а'],
        validAnswer: 0,
      },
      {
        answers: ['н', '_'],
        validAnswer: 0,
      },
      {
        answers: ['ь', 'ъ'],
        validAnswer: 1,
      },
      {
        answers: ['_', ','],
        validAnswer: 1,
      },
    ],
  },
  {
    name: 'На фабрике',
    text: `Попав на мебельную фабрику, путешественники были очень удивлены. Стулья, ст{0}лы, шкафы, диваны изготовлялись здесь не из дерева, а из различных пластических масс. 
    Процесс производства был очень прост. Заранее заготовленная пластмасса подавалась в отверстие штамповальной машины. 
    Там она сдавливалась при помощи пресса. И в результате из машины выскакивал готовый стул или кровать.Пластическая масса изготовлялась самых различных цветов и оттенков. 
    Была так называемая древопластмасса. Сделанную из нее мебель невозможно было отличить от деревянной. Была также металлопластмасса. 
    Из металлопластмассы делали люстры, дверные ручки, рамы для картин.`,
    questions: [
      {
        answers: ['о', 'а'],
        validAnswer: 0,
      },
    ],
  },
  {
    name: 'На закате',
    text: `Солнце уже опускалось за лес. Оно бр{0}сало несколько чуть-чуть теплых лучей, которые прорезывались огненной полосой через весь лес, ярко обливая золотом верхушки сосен. 
    Потом лучи гасли один за другим. Последний луч оставался долго, он, как тонкая игла, вонзился в чащу ветвей. 
    Предметы теряли свою форму: все сливалось сначала в серую, потом в темную массу. 
    Пение птиц постепенно ослабевало. Вскоре они совсем замолкли, кроме одной, которая монотонно чирикала среди общей тишины. 
    Вот она в последний раз встрепенулась, слабо свистнула, слегка пошевелив листья вокруг себя, и заснула.`,
    questions: [
      {
        answers: ['о', 'а'],
        validAnswer: 0,
      },
    ],
  },
];

export default dictations;
