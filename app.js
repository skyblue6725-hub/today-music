/* =========================================================
       1. DATA DEFINITIONS: TIME, MOOD, GENRE & SONG DATABASE
       ========================================================= */

    const TIME_CONFIG = [
      {
        id: 'dawn',
        name: '새벽 (03:00 ~ 06:00)',
        weatherIcon: '🌌',
        desc: '도시의 소음이 잠들고 나만의 사색이 깊어지는 푸른 새벽',
        themeClass: 'theme-dawn'
      },
      {
        id: 'morning',
        name: '아침 (06:00 ~ 09:00)',
        weatherIcon: '🌄',
        desc: '여명이 트고 새로운 하루의 호흡을 시작하는 상쾌한 아침',
        themeClass: 'theme-morning'
      },
      {
        id: 'late-morning',
        name: '오전 (09:00 ~ 12:00)',
        weatherIcon: '☀️',
        desc: '머리가 맑아지고 활기찬 집중과 활력이 살아나는 시간',
        themeClass: 'theme-late-morning'
      },
      {
        id: 'afternoon',
        name: '오후 (12:00 ~ 18:00)',
        weatherIcon: '🌤️',
        desc: '따사로운 햇살과 나른함 속 한 잔의 커피가 필요한 오후',
        themeClass: 'theme-afternoon'
      },
      {
        id: 'evening',
        name: '저녁 (18:00 ~ 21:00)',
        weatherIcon: '🌆',
        desc: '하루의 매듭을 짓고 노을과 함께 긴장이 스르륵 풀리는 시간',
        themeClass: 'theme-evening'
      },
      {
        id: 'night',
        name: '밤 (21:00 ~ 03:00)',
        weatherIcon: '🌙',
        desc: '달빛 아래 오롯이 혼자만의 감정에 잠겨보는 안락한 밤',
        themeClass: 'theme-night'
      }
    ];

    const MOOD_NAMES = {
      happy: '행복 · 에너지',
      flutter: '설렘 · 기대감',
      peaceful: '평안 · 쉼',
      sad: '슬픔 · 눈물',
      melancholy: '우울 · 먹먹함'
    };

    const GENRE_CONFIG = {
      rock: {
        title: '록 / 밴드 (Rock / Band)',
        desc: '생동감 넘치는 드럼 킥과 묵직한 베이스, 심장을 울리는 일렉기타 리프의 카타르시스'
      },
      pop: {
        title: '팝 / 어쿠스틱 (Pop / Acoustic)',
        desc: '귓가에 감기는 멜로디와 따뜻한 통기타의 나일론 줄 울림이 전하는 편안한 위로'
      },
      jazz: {
        title: '재즈 / 소울 (Jazz / Soul)',
        desc: '스윙 리듬 위의 감미로운 색소폰과 그루브 넘치는 워킹 베이스가 빚어내는 즉흥의 미학'
      },
      rnb: {
        title: 'R&B / 힙합 (R&B / Hip-Hop)',
        desc: '트렌디한 808 베이스와 끈적한 그루브, 몽환적인 신시사이저와 솔직한 보컬의 조화'
      },
      indie: {
        title: '인디 / 포크 (Indie / Folk)',
        desc: '투박하지만 담백한 시적 노랫말과 일상의 온도를 노래하는 감성적인 사운드스케이프'
      },
      random: {
        title: '완전 랜덤 장르 (Surprise)',
        desc: '장르의 경계를 넘어, 오늘 운명처럼 당신에게 가 닿을 특별한 음악 한 곡'
      }
    };

    // Rich Music Database (Carefully Curated with Bandman's Technical & Warm Commentary)
    const SONG_DATABASE = [
      {
        id: 'coldplay-fix-you',
        title: 'Fix You',
        artist: 'Coldplay (콜드플레이)',
        genre: 'rock',
        genreLabel: '얼터너티브 록 / 밴드',
        lyric: 'Lights will guide you home, and ignite your bones, and I will try to fix you.',
        releaseYear: '2005',
        album: 'X&Y',
        icon: '🎹',
        moods: ['sad', 'melancholy', 'peaceful'],
        times: ['night', 'dawn', 'evening'],
        bandmanComment: '처음엔 덤덤한 교회 오르간 소리로 시작하지만, 후반부에 윌 챔피언의 묵직한 탐탐 드럼과 조니 버클랜드의 기타 드라이브가 폭발하는 순간 전율이 돋습니다. 밴드 음악만이 줄 수 있는 카타르시스의 교과서 같은 트랙이죠.',
        whyRecommend: '감정이 가라앉은 시간대, 억눌렀던 슬픔을 음악의 크레센도로 정화시켜 줍니다. 악기들이 차례대로 쌓여가며 당신을 든든하게 받쳐주는 느낌을 받을 거예요.',
        songHistory: '크리스 마틴이 당시 아내였던 기네스 팰트로가 부친상을 당했을 때, 그 깊은 상실감을 위로하기 위해 만든 곡입니다. 멤버들의 아버지가 남긴 오래된 신시사이저 소리를 그대로 녹음하여 진정성을 더했습니다.',
        artistDesc: '1996년 런던에서 결성된 세계적인 4인조 스타디움 록 밴드입니다. 서정적인 멜로디와 감성을 압도하는 밴드 사운드로 전 세계 수억 명의 리스너를 위로하고 있습니다.'
      },
      {
        id: 'day6-time-of-our-life',
        title: '한 페이지가 될 수 있게',
        artist: 'DAY6 (데이식스)',
        genre: 'rock',
        genreLabel: '팝 록 / K-Band',
        lyric: '지금 이 순간이 다시 넘겨볼 수 있는 한 페이지가 될 수 있게, 나와 함께해 줄래.',
        releaseYear: '2019',
        album: 'The Book of Us : Gravity',
        icon: '🎸',
        moods: ['happy', 'flutter'],
        times: ['morning', 'late-morning', 'afternoon'],
        bandmanComment: '도입부의 시원한 파워 코드와 쉼 없이 달리는 16비트 베이스라인이 귀를 번쩍 뜨이게 합니다. 세련된 신스 아르페지오와 펑크 록 스타일의 투스텝 드럼이 합쳐져 심박수를 기분 좋게 120BPM 이상으로 올려줍니다.',
        whyRecommend: '새로운 에너지가 샘솟는 지금, 벅차오르는 밴드 사운드로 당신의 하루를 청춘 영화의 한 장면으로 만들어줄 최고의 처방전입니다.',
        songHistory: '멤버 영케이(Young K)와 원필이 작곡에 참여한 곡으로, 발매 이후 입소문을 타며 수많은 대학 축제와 야외 페스티벌의 떼창 앤섬(Anthem)으로 자리 잡았습니다.',
        artistDesc: 'JYP 엔터테인먼트의 실력파 팝 밴드로, 전 멤버가 보컬과 악기 연주, 전곡 작사/작곡을 소화하는 올라운더 밴드입니다.'
      },
      {
        id: 'jannabi-summer-night',
        title: '뜨거운 여름밤은 가고 남은 건 볼품없지만',
        artist: '잔나비 (JANNABI)',
        genre: 'rock',
        genreLabel: '빈티지 팝 록',
        lyric: '그땐 난 어떤 마음이었길래 내 모든 걸 주고도 웃을 수 있었나.',
        releaseYear: '2016',
        album: 'MONKEY HOTEL',
        icon: '🎻',
        moods: ['sad', 'melancholy', 'peaceful'],
        times: ['evening', 'night', 'dawn'],
        bandmanComment: '60~70년대 아날로그 콘솔에서 뽑아낸 듯한 빈티지한 리버브와 스트링 편곡이 일품입니다. 최정훈 특유의 읊조리는 허스키한 톤과 담백한 어쿠스틱 기타 스트로크가 가슴 한구석을 진하게 적십니다.',
        whyRecommend: '하루의 해가 저물고 옛 기억이 스칠 때, 화려한 이펙터 없이 아날로그 악기들의 찰랑임만으로 깊은 여운을 안겨주는 곡입니다.',
        songHistory: '작은 홍대 클럽에서 밑바닥부터 음악을 시작했던 잔나비가 대중에게 그들의 독보적인 레트로 사운드를 각인시킨 출세작입니다.',
        artistDesc: '1992년생 동네 원숭이띠 친구들이 뭉쳐 만든 밴드로, 영미 클래식 록의 작법을 한국적인 서정성으로 탁월하게 재해석하는 그룹입니다.'
      },
      {
        id: 'queen-dont-stop-me-now',
        title: "Don't Stop Me Now",
        artist: 'Queen (퀸)',
        genre: 'rock',
        genreLabel: '글램 록 / 클래식 록',
        lyric: "I'm burning through the sky, yeah! 200 degrees, that's why they call me Mister Fahrenheit!",
        releaseYear: '1978',
        album: 'Jazz',
        icon: '👑',
        moods: ['happy', 'flutter'],
        times: ['morning', 'late-morning', 'afternoon'],
        bandmanComment: '프레디 머큐리의 탄탄한 오른손 피아노 타건과 존 디콘의 역동적인 워킹 베이스가 추진력을 만들고, 중반부 브라이언 메이의 시그니처 레드 스페셜 기타 솔로가 불꽃을 뿜어냅니다. 악기들의 호흡이 그야말로 완벽한 폭발력을 자랑하죠.',
        whyRecommend: '아드레날린이 필요한 순간, 이 곡보다 더 강력한 부스터는 없습니다. 악기들의 질주감이 당신의 행복감을 최고조로 끌어올립니다.',
        songHistory: '과학계 신경과학 연구에서 ‘인류 역사상 가장 사람을 행복하게 만드는 노래 1위’로 꼽힌 바 있을 만큼 음향학적으로 완벽한 흥을 지닌 명곡입니다.',
        artistDesc: '영국이 낳은 전설적인 록 밴드로, 록에 오페라와 팝을 결합하여 현대 대중음악사의 새로운 지평을 연 거장들입니다.'
      },
      {
        id: 'radiohead-no-surprises',
        title: 'No Surprises',
        artist: 'Radiohead (라디오헤드)',
        genre: 'rock',
        genreLabel: '아트 록 / 포스트 모던',
        lyric: 'A heart that’s full up like a landfill, a job that slowly kills you, bruises that won’t heal.',
        releaseYear: '1997',
        album: 'OK Computer',
        icon: '🔔',
        moods: ['melancholy', 'peaceful'],
        times: ['dawn', 'night'],
        bandmanComment: '글로켄슈필의 맑고 서늘한 종소리 테마와 조니 그린우드의 몽환적인 클린톤 기타 아르페지오가 귓가에 맴돕니다. 톰 요크의 힘을 뺀 가성 보컬과 묵직한 베이스의 룸 톤이 세상에서 가장 쓸쓸하고도 아름다운 안전지대를 만들어줍니다.',
        whyRecommend: '세상의 번잡한 소음에서 벗어나 조용히 침잠하고 싶을 때, 억지 위로 대신 당신의 공허함을 그대로 보듬어주는 섬세한 사운드입니다.',
        songHistory: '현대 문명 속 인간의 소외와 피로를 다룬 걸작 앨범 수록곡으로, 뮤직비디오에서 톰 요크가 물이 차오르는 헬멧을 쓰고 원테이크로 버티는 장면은 전설로 남아있습니다.',
        artistDesc: '록 음악의 한계를 넘어 전자음악, 재즈, 미니멀리즘을 융합하며 대중음악의 예술적 지평을 끝없이 확장해 온 혁신적인 밴드입니다.'
      },
      {
        id: 'ed-sheeran-photograph',
        title: 'Photograph',
        artist: 'Ed Sheeran (에드 시런)',
        genre: 'pop',
        genreLabel: '어쿠스틱 팝',
        lyric: 'We keep this love in a photograph, we made these memories for ourselves.',
        releaseYear: '2014',
        album: 'x (Multiply)',
        icon: '📷',
        moods: ['sad', 'peaceful', 'flutter'],
        times: ['evening', 'night', 'dawn'],
        bandmanComment: '루프 스테이션 없이 소박한 어쿠스틱 기타 핑거스타일로 시작해, 곡이 진행될수록 첼로와 바이올린 콰르텟이 부드럽게 감싸 안는 편곡이 일품입니다. 특히 톤이 맑은 마틴 통기타의 현 울림이 아주 따뜻합니다.',
        whyRecommend: '소중한 추억을 꺼내보게 되는 감성적인 시간대에, 나직한 통기타의 호흡과 스트링의 온기가 마음을 포근하게 안아줍니다.',
        songHistory: '에드 시런이 장거리 연애 중이던 연인을 그리워하며 호텔 방에서 작은 레고 기타를 뚱땅거리다 완성한 진솔한 사랑 이야기입니다.',
        artistDesc: '통기타 한 대와 루프 페달만으로 수만 명의 스타디움 관객을 쥐락펴락하는 현대 팝 음악계 최고의 싱어송라이터입니다.'
      },
      {
        id: 'jason-mraz-im-yours',
        title: "I'm Yours",
        artist: 'Jason Mraz (제이슨 므라즈)',
        genre: 'pop',
        genreLabel: '어쿠스틱 / 레게 팝',
        lyric: "Look into your heart and you'll find love, love, love, love. Listen to the music of the moment.",
        releaseYear: '2008',
        album: "We Sing. We Dance. We Steal Things.",
        icon: '🌴',
        moods: ['happy', 'peaceful', 'flutter'],
        times: ['morning', 'late-morning', 'afternoon'],
        bandmanComment: '레게 특유의 2박과 4박 뒷박자를 긁어주는 촙(Chop) 주법과 맑은 우쿨렐레/나일론 기타 리듬이 몸을 자연스럽게 까딱이게 만듭니다. 제이슨 므라즈의 경쾌한 스캣 보컬은 어떤 스트레스도 날려버릴 만큼 유쾌하죠.',
        whyRecommend: '따뜻한 햇살 아래 여유와 긍정적인 바이브를 채우고 싶을 때, 유연하고 편안한 리듬감이 미소를 번지게 해줍니다.',
        songHistory: '빌보드 핫 100 차트에서 무려 76주 동안 머무르며 전 세계에 어쿠스틱 힐링 열풍을 불러일으킨 세기의 힐링 트랙입니다.',
        artistDesc: '미국 캘리포니아 출신의 싱어송라이터이자 환경운동가로, 인간미 넘치는 가사와 꿀 같은 목소리로 전 세계 음악 팬들의 오랜 친구가 되었습니다.'
      },
      {
        id: 'lauv-paris-in-the-rain',
        title: 'Paris in the Rain',
        artist: 'Lauv (라우브)',
        genre: 'pop',
        genreLabel: '드림 팝 / 이지리스닝',
        lyric: "'Cause anywhere with you feels right, anywhere with you feels like Paris in the rain.",
        releaseYear: '2017',
        album: 'I met you when I was 18.',
        icon: '🌧️',
        moods: ['flutter', 'peaceful', 'happy'],
        times: ['evening', 'night'],
        bandmanComment: '로즈(Rhodes) 일렉트릭 피아노의 물기 머금은 건반 톤과 미니멀한 핑거 스냅, 소프트한 신스 베이스가 귓가를 간지럽힙니다. 과하지 않게 절제된 드럼 루프 덕분에 보컬의 촉촉한 질감이 극대화됩니다.',
        whyRecommend: '설렘과 낭만이 피어오르는 저녁 시간, 비 내리는 파리의 카페 테라스에 앉아있는 듯한 낭만적인 공간감을 선사합니다.',
        songHistory: '우디 앨런의 영화 <미드나잇 인 파리>를 보고 영감을 받아 만든 곡으로, 사랑하는 사람과 함께라면 평범한 빗길도 낭만이 된다는 메시지를 담았습니다.',
        artistDesc: '현대 청춘들의 불안과 섬세한 연애 감정을 특유의 멜랑콜리한 팝 사운드로 그려내는 미국의 감성 팝 프로듀서입니다.'
      },
      {
        id: 'adele-make-you-feel-my-love',
        title: 'Make You Feel My Love',
        artist: 'Adele (아델)',
        genre: 'pop',
        genreLabel: '소울 팝 / 발라드',
        lyric: 'I could hold you for a million years, to make you feel my love.',
        releaseYear: '2008',
        album: '19',
        icon: '🖤',
        moods: ['sad', 'peaceful', 'melancholy'],
        times: ['night', 'dawn'],
        bandmanComment: '현란한 테크닉 대신 절제된 피아노 하모니와 스트링 앙상블, 그리고 아델의 호흡 소리까지 느껴지는 마이크 믹싱이 압권입니다. 보컬의 다이내믹스가 악기 하나하나와 깊은 대화를 나누는 정통 어쿠스틱 레코딩의 진수입니다.',
        whyRecommend: '지친 하루 끝, 상처받은 마음에 단단한 위로가 필요할 때 아델의 깊은 울림이 흔들리는 마음을 든든하게 지탱해 줍니다.',
        songHistory: '노벨문학상 수상자인 밥 딜런(Bob Dylan)의 1997년 원곡을 아델이 자신만의 소울풀한 창법으로 재해석하여 전 세계적인 찬사를 받았습니다.',
        artistDesc: '그래미 어워드를 휩쓴 21세기 최고의 보컬리스트로, 인간의 가장 원초적인 감정을 폭발적인 성량과 진정성으로 노래합니다.'
      },
      {
        id: 'chet-baker-i-fall-in-love',
        title: 'I Fall in Love Too Easily',
        artist: 'Chet Baker (쳇 베이커)',
        genre: 'jazz',
        genreLabel: '쿨 재즈 / 보컬 재즈',
        lyric: 'I fall in love too easily, I fall in love too fast, I should have learned to tread softly.',
        releaseYear: '1954',
        album: 'Chet Baker Sings',
        icon: '🎺',
        moods: ['melancholy', 'sad', 'peaceful'],
        times: ['dawn', 'night'],
        bandmanComment: '뮤트(Mute)를 뺀 트럼펫의 부드러우면서도 처연한 톤과, 속삭이듯 힘을 뺀 쳇 베이커의 중성적인 보컬이 빚어내는 공간감이 예술입니다. 콘트라베이스의 느긋한 피치카토가 밤의 정적을 한 땀 한 땀 메워줍니다.',
        whyRecommend: '모두가 잠든 새벽, 굳이 밝은 척할 필요 없이 쓸쓸한 감정에 진하게 취하고 싶을 때 곁에 두기 가장 좋은 재즈 명반입니다.',
        songHistory: '웨스트 코스트 쿨 재즈의 황태자로 불리던 쳇 베이커의 파란만장한 삶과 방황이 그대로 녹아 있는 불멸의 재즈 스탠더드입니다.',
        artistDesc: '우수에 젖은 눈빛과 천재적인 멜로디 감각으로 1950년대 재즈계를 뒤흔든 전설적인 트럼페터이자 보컬리스트입니다.'
      },
      {
        id: 'norah-jones-dont-know-why',
        title: "Don't Know Why",
        artist: 'Norah Jones (노라 존스)',
        genre: 'jazz',
        genreLabel: '재즈 팝 / 보컬 재즈',
        lyric: "I don't know why I didn't come, I left you by the house of fun.",
        releaseYear: '2002',
        album: 'Come Away with Me',
        icon: '☕',
        moods: ['peaceful', 'melancholy'],
        times: ['morning', 'afternoon', 'dawn'],
        bandmanComment: '어쿠스틱 그랜드 피아노의 절제된 타건과 브러시(Brush)로 스네어를 부드럽게 쓸어내리는 드럼 주법이 마음의 온도를 낮춰줍니다. 펜더 재즈 베이스의 따뜻한 중저음이 보컬 아래를 든든하게 받쳐줍니다.',
        whyRecommend: '분주한 생각들을 정리하고 고요한 쉼표를 찍고 싶을 때, 부드러운 카푸치노 거품처럼 마음을 다독여주는 편안한 트랙입니다.',
        songHistory: '제45회 그래미 어워드에서 올해의 앨범상, 올해의 레코드상을 포함해 무려 8개 부문을 싹쓸이하며 2000년대 재즈의 르네상스를 연 곡입니다.',
        artistDesc: '인도의 시타르 거장 라비 샹카르의 딸이자, 재즈와 컨트리, 팝의 경계를 자유롭게 넘나드는 세계적인 재즈 피아니스트 겸 보컬리스트입니다.'
      },
      {
        id: 'stevie-wonder-isnt-she-lovely',
        title: "Isn't She Lovely",
        artist: 'Stevie Wonder (스티비 원더)',
        genre: 'jazz',
        genreLabel: '모타운 소울 / 훵크',
        lyric: "Isn't she lovely? Isn't she wonderful? Isn't she precious, less than one minute old?",
        releaseYear: '1976',
        album: 'Songs in the Key of Life',
        icon: '✨',
        moods: ['happy', 'flutter'],
        times: ['morning', 'late-morning', 'afternoon'],
        bandmanComment: '도입부의 생동감 넘치는 크로매틱 하모니카 솔로와 스티비 원더가 직접 연주한 통통 튀는 펑키 드럼 킷, 펜더 로즈의 쫀득한 텐션 코드가 듣는 순간 어깨를 들썩이게 만듭니다. 그루브의 정석 그 자체입니다.',
        whyRecommend: '세상이 아름답게 느껴지고 긍정 에너지가 솟구칠 때, 리듬 섹션의 경쾌한 탄력이 온몸에 활기를 가득 불어넣어 줍니다.',
        songHistory: '스티비 원더가 자신의 첫 딸 아샤(Aisha)의 탄생을 축하하며 만든 곡으로, 곡 말미에는 실제 아기의 목욕 소리와 옹알이가 녹음되어 있습니다.',
        artistDesc: '선천적 시각장애를 극복하고 건반, 드럼, 하모니카 등 모든 악기를 마스터하며 팝과 소울 음악의 지형을 바꾼 20세기 최고의 천재 음악가입니다.'
      },
      {
        id: 'michael-buble-feeling-good',
        title: 'Feeling Good',
        artist: 'Michael Bublé (마이클 부블레)',
        genre: 'jazz',
        genreLabel: '빅밴드 스윙 재즈',
        lyric: "Birds flying high, you know how I feel. Sun in the sky, you know how I feel.",
        releaseYear: '2005',
        album: "It's Time",
        icon: '🎷',
        moods: ['happy', 'flutter'],
        times: ['afternoon', 'evening'],
        bandmanComment: '무반주 아카펠라로 묵직하게 긴장감을 조성하다가, 16마디 이후 브라스 섹션의 폭발적인 혼(Horn) 사운드와 팀파니가 몰아칠 때의 쾌감은 타의 추종을 불허합니다. 스윙 밴드의 합이 주는 드라마틱한 다이내믹스죠.',
        whyRecommend: '자신감을 충전하고 새로운 도전을 앞둔 순간, 웅장한 빅밴드의 관악기 사운드가 당신의 당당한 발걸음에 BGM을 깔아줍니다.',
        songHistory: '1964년 뮤지컬에서 시작해 니나 시몬(Nina Simone) 등 수많은 거장들이 불렀던 명곡으로, 부블레의 현대적인 빅밴드 편곡으로 다시 한번 전 세계를 사로잡았습니다.',
        artistDesc: '프랭크 시나트라의 계보를 잇는 현대 스탠더드 팝 & 재즈의 제왕으로, 달콤하면서도 호소력 짙은 바리톤 보이스가 트레이드마크입니다.'
      },
      {
        id: 'crush-sometimes',
        title: '가끔',
        artist: '크러쉬 (Crush)',
        genre: 'rnb',
        genreLabel: '어반 R&B / 소울',
        lyric: '가끔 널 생각할 때마다 왜 이리 가슴이 먹먹해지는지, 잊혀진 줄 알았던 네 흔적들이.',
        releaseYear: '2014',
        album: 'Crush On You',
        icon: '🎧',
        moods: ['sad', 'melancholy'],
        times: ['evening', 'night'],
        bandmanComment: '90년대 슬로우잼 바이브의 끈적한 림샷(Rimshot) 비트와 프렛리스(Fretless) 베이스의 미끄러지는 글리산도 주법이 가슴을 툭툭 건드립니다. 그루브한 박자감 속에서 흘러나오는 솔직한 보컬 라인이 일품입니다.',
        whyRecommend: '귀갓길 저녁 차창 밖을 바라보며 쓸쓸한 감상에 잠길 때, 세련된 비트 위에 얹힌 감성적인 멜로디가 좋은 길동무가 되어줍니다.',
        songHistory: '크러쉬가 프로듀서 그레이(GRAY)와 함께 작업하여 본인만의 독보적인 네오 소울 R&B 정체성을 세상에 처음 각인시킨 명곡입니다.',
        artistDesc: '트렌디한 힙합/R&B부터 서정적인 재즈 발라드까지 자유자재로 소화하는 대한민국 대표 싱어송라이터이자 프로듀서입니다.'
      },
      {
        id: 'ziont-eat',
        title: '꺼내 먹어요',
        artist: '자이언티 (Zion.T)',
        genre: 'rnb',
        genreLabel: '소울 R&B',
        lyric: '쉽지 않죠, 바쁘죠, 왜 이렇게 까지 해야 하나 싶죠. 그럴 땐 이 노래를 초콜릿처럼 꺼내 먹어요.',
        releaseYear: '2015',
        album: '꺼내 먹어요',
        icon: '🍫',
        moods: ['peaceful', 'sad', 'melancholy'],
        times: ['late-morning', 'evening', 'night'],
        bandmanComment: '화려한 악기 세션을 덜어내고 로즈(Rhodes) EP 건반과 핑거스냅, 둥글둥글한 808 서브 베이스만으로 여백의 미를 살렸습니다. 귓가에 대고 바로 조곤조곤 말하는 듯한 근접 마이킹 보컬 믹싱이 위로의 온도를 높입니다.',
        whyRecommend: '사회생활에 치여 방전되었을 때, 달콤한 초콜릿 하나를 입에 물듯 마음을 편안하게 녹여주는 따뜻한 사운드입니다.',
        songHistory: '지친 현대인들에게 음악으로 전하는 다정한 편지 같은 곡으로, 발매 즉시 모든 음원 차트 1위를 휩쓸며 국민 힐링송이 되었습니다.',
        artistDesc: '독보적인 음색과 독창적인 프레이징으로 한국 R&B 씬에 새로운 어법을 제시한 싱어송라이터입니다.'
      },
      {
        id: 'daniel-caesar-best-part',
        title: 'Best Part (feat. H.E.R.)',
        artist: 'Daniel Caesar (대니얼 시저)',
        genre: 'rnb',
        genreLabel: '네오 소울 / 컨템포러리 R&B',
        lyric: "If life is a movie, then you're the best part. You're the sunshine in my life.",
        releaseYear: '2017',
        album: 'Freudian',
        icon: '🌅',
        moods: ['flutter', 'peaceful'],
        times: ['dawn', 'morning', 'afternoon'],
        bandmanComment: '어쿠스틱 나일론 기타의 부드러운 코드 체인지와 절제된 킥/스네어, 그리고 두 보컬의 화음(Harmony)이 빚어내는 공간감이 황홀합니다. 불필요한 이펙트를 싹 걷어낸 날것의 유기농(Organic) 사운드죠.',
        whyRecommend: '설레는 사랑의 순간, 혹은 평온한 햇살을 맞이할 때 두 사람의 조화로운 화음이 마음속을 가장 따뜻한 빛으로 물들여줍니다.',
        songHistory: '그래미 어워드 최우수 R&B 퍼포먼스상을 수상하며, 미니멀한 편곡과 진솔한 멜로디의 힘이 얼마나 위대한지 증명한 2010년대 네오 소울의 명작입니다.',
        artistDesc: '가스펠(Gospel)에 뿌리를 둔 따뜻한 코드 진행과 감미로운 미성으로 전 세계 R&B 팬들을 매료시킨 캐나다의 싱어송라이터입니다.'
      },
      {
        id: 'beenzino-aqua-man',
        title: 'Aqua Man',
        artist: '빈지노 (Beenzino)',
        genre: 'rnb',
        genreLabel: '재지 힙합 / 칠 랩',
        lyric: '하루 종일 널 바래다주다 지쳐도, 네 미소 한 번에 난 바다를 헤엄쳐.',
        releaseYear: '2012',
        album: '24 : 26',
        icon: '🌊',
        moods: ['happy', 'flutter'],
        times: ['afternoon', 'evening'],
        bandmanComment: '청량한 일렉트릭 피아노 루프와 촙드 앤 스크루(Chopped)된 재즈 샘플링, 그루비하게 통통 튀는 베이스라인이 빈지노 특유의 레이드백(Laid-back)된 플로우와 절묘하게 맞물립니다.',
        whyRecommend: '심장이 두근거리는 설렘과 가벼운 흥을 느끼고 싶을 때, 시원한 바닷바람을 쐬듯 산뜻한 기분 전환을 선사합니다.',
        songHistory: '한국 힙합 역사상 가장 세련된 클래식 앨범으로 꼽히는 <24 : 26>의 수록곡으로, 10년이 지난 지금까지도 여름만 되면 울려 퍼지는 명곡입니다.',
        artistDesc: '서울대 미대 출신이라는 독특한 이력과 함께 예술적 감각, 탁월한 라임 구성으로 한국 힙합 씬의 스타일 아이콘으로 자리 잡은 래퍼입니다.'
      },
      {
        id: 'hyukoh-tomboy',
        title: 'TOMBOY',
        artist: '혁오 (HYUKOH)',
        genre: 'indie',
        genreLabel: '인디 록 / 포스트 펑크',
        lyric: '젊은 우리, 나이테는 잘 보이지 않고, 찬란한 빛에 눈이 멀어 꺼져가는데.',
        releaseYear: '2017',
        album: '23',
        icon: '🔥',
        moods: ['sad', 'melancholy', 'peaceful'],
        times: ['evening', 'night', 'dawn'],
        bandmanComment: '나지막한 펜더 텔레캐스터 기타의 클린 아르페지오로 시작해, 후반부에서 퍼즈(Fuzz) 디스토션과 함께 모든 악기가 울부짖듯 터져 나오는 다이내믹스가 압권입니다. 오혁의 허스키한 포효는 청춘의 불안을 음악화한 결정체죠.',
        whyRecommend: '방황하고 막막한 청춘의 슬픔과 먹먹함을 마주할 때, 위선적인 조언 대신 날것의 사운드로 함께 아파해 주는 깊은 공감을 전합니다.',
        songHistory: '앨범 발매 당시 청춘들의 전폭적인 지지를 받으며 한국대중음악상 ‘올해의 노래’와 ‘최우수 모던록 노래’를 휩쓴 시대의 찬가입니다.',
        artistDesc: '독창적인 편곡 스타일과 빈티지한 사운드로 아시아를 넘어 영미권 록 페스티벌에서도 뜨거운 러브콜을 받는 글로벌 인디 밴드입니다.'
      },
      {
        id: 'silica-gel-no-pain',
        title: 'NO PAIN',
        artist: '실리카겔 (Silica Gel)',
        genre: 'indie',
        genreLabel: '사이키델릭 록 / 네오 인디',
        lyric: 'No Pain, No Gain. 슬픔이 지나간 자리엔 새로운 불꽃이 타오를 거야.',
        releaseYear: '2022',
        album: 'NO PAIN',
        icon: '⚡',
        moods: ['happy', 'flutter'],
        times: ['afternoon', 'night'],
        bandmanComment: '귀를 찢는 강렬한 기타 리프와 미래지향적인 아날로그 신시사이저의 폭주, 김한주의 중독적인 보컬 멜로디가 놀라운 긴장감을 뿜어냅니다. 악기들이 서로 얽히며 만들어내는 에너지 레벨이 가히 폭발적입니다.',
        whyRecommend: '정체된 일상에 짜릿한 전율과 텐션이 필요할 때, 라이브 클럽 맨 앞줄에서 앰프의 진동을 온몸으로 맞는 듯한 쾌감을 선사합니다.',
        songHistory: '한국대중음악상 3년 연속 최우수 모던록 노래상을 수상하며 현재 한국 인디 음악 씬에서 가장 뜨거운 신드롬을 일으키고 있는 주역들의 대표곡입니다.',
        artistDesc: '폭발적인 연주력과 실험적인 비주얼 아트를 결합해 K-인디 록의 새로운 전성기를 이끌고 있는 4인조 밴드입니다.'
      },
      {
        id: 'lucid-fall-ordinary-day',
        title: '보통의 하루',
        artist: '루시드폴 (Lucid Fall)',
        genre: 'indie',
        genreLabel: '어쿠스틱 포크',
        lyric: '수고했어요, 오늘 하루도. 별일 없이 살아낸 보통의 날들이 참 고마워요.',
        releaseYear: '2007',
        album: '국경의 밤',
        icon: '🌱',
        moods: ['peaceful', 'sad', 'melancholy'],
        times: ['dawn', 'morning', 'night'],
        bandmanComment: '나일론 통기타의 현을 엄지손가락으로 퉁기는 부드러운 소리와 잔잔한 첼로의 지속음(Drone), 그리고 시인의 목소리가 더해져 마음의 파도를 잠재웁니다. 자극적인 사운드를 철저히 배제한 오가닉 음악의 정수입니다.',
        whyRecommend: '지치고 메마른 영혼에 무공해 쉼터가 필요할 때, 아무런 판단 없이 묵묵히 등을 토닥여주는 따뜻한 위로를 전합니다.',
        songHistory: '공학 박사 출신이자 제주도에서 감귤 농사를 짓는 싱어송라이터 루시드폴이 평범하게 흘러가는 하루하루의 숭고함을 노래한 명곡입니다.',
        artistDesc: '‘가요계의 음유시인’으로 불리며 서정적인 노랫말과 어쿠스틱 악기의 따스한 울림으로 수많은 리스너들의 마음에 쉼표를 찍어주는 아티스트입니다.'
      },
      {
        id: 'yerin-baek-square',
        title: 'Square (2017)',
        artist: '백예린 (Yerin Baek)',
        genre: 'indie',
        genreLabel: '시티팝 / 인디 팝',
        lyric: 'All the colors and personalities, you are the only one that makes me truly smile.',
        releaseYear: '2019',
        album: 'Every letter I sent you.',
        icon: '🍃',
        moods: ['happy', 'flutter', 'peaceful'],
        times: ['afternoon', 'evening'],
        bandmanComment: '찰랑거리는 펜더 텔레캐스터 클린 기타와 경쾌한 셔플 드럼 그루브, 그리고 백예린의 청량하고 세련된 보컬 톤이 탁 트인 야외 페스티벌의 초록빛 바람을 떠올리게 합니다. 밴드 세션의 조화가 완벽히 어우러집니다.',
        whyRecommend: '기분 좋은 바람이 불어오는 시간, 마음을 깃털처럼 가볍게 날려 보내고 싶을 때 청량한 해방감을 선물합니다.',
        songHistory: '야외 페스티벌 직캠 영상 하나로 전설을 기록한 후, 팬들의 열화와 같은 성원에 힘입어 발매되어 한국 가요 역사상 영문 가사 곡 최초로 멜론 1위를 차지한 기념비적인 곡입니다.',
        artistDesc: '솔로 싱어송라이터이자 록 밴드 The Volunteers(더 발룬티어스)의 프론트퍼슨으로 폭넓은 음악 스펙트럼을 보여주는 아티스트입니다.'
      },
      {
        id: 'the-black-skirts-everything',
        title: 'EVERYTHING',
        artist: '검정치마 (The Black Skirts)',
        genre: 'indie',
        genreLabel: '드림 팝 / 인디 록',
        lyric: '넌 내 모든 거야, 내 여름이고 내 꿈이야. 넌 내 모든 거야, 나 있는 그대로 받아줄게.',
        releaseYear: '2017',
        album: 'TEAM BABY',
        icon: '🌙',
        moods: ['peaceful', 'flutter', 'sad'],
        times: ['night', 'dawn'],
        bandmanComment: '빈티지 아날로그 테이프를 통과한 듯 몽글몽글한 코러스(Chorus) 이펙트가 걸린 기타 아르페지오와 나른한 슬로우 템포 드럼이 심장을 느리게 뛰게 합니다. 조휴일 특유의 무심한 듯 헌신적인 보컬이 마음에 안식처를 만들어줍니다.',
        whyRecommend: '온 세상이 조용해진 밤, 누군가를 향한 절절하고 순수한 감정을 오롯이 음미하고 싶을 때 최고의 배경음악입니다.',
        songHistory: '사랑의 찬란함과 영원성을 다룬 정규 3집 <TEAM BABY>의 타이틀곡으로, 인디 씬을 넘어 대중적인 큰 사랑을 받으며 수많은 뮤지션들의 커버를 낳았습니다.',
        artistDesc: '싱어송라이터 조휴일의 1인 밴드로, 펑크 록부터 Lo-fi 인디 팝까지 독보적인 감수성과 문학적인 가사로 한국 인디 씬의 정점에 선 아티스트입니다.'
      },
      {
        id: '10cm-stalker',
        title: '스토커',
        artist: '10CM (십센치)',
        genre: 'pop',
        genreLabel: '어쿠스틱 발라드',
        lyric: '나도 알아 나의 문제가 무엇인지, 난 못났고 별 볼 일 없지. 그 애가 날 바라볼 리 없지.',
        releaseYear: '2014',
        album: '3.0',
        icon: '💔',
        moods: ['sad', 'melancholy'],
        times: ['night', 'dawn', 'evening'],
        bandmanComment: '기교를 부리지 않은 담담한 마틴 어쿠스틱 기타 핑거링 한 대와 권정열의 떨리는 팔세토(가성) 보컬 하나만으로 곡 전체를 끌고 갑니다. 여백이 많은 편곡 덕분에 짝사랑의 초라함과 아릿한 감정이 숨소리 하나까지 폐부를 찌릅니다.',
        whyRecommend: '혼자 끙끙 앓던 짝사랑이나 작아지는 자존감으로 가슴이 먹먹할 때, 이 노래의 솔직한 찌질함(?)이 오히려 가장 큰 공감과 위로를 건넵니다.',
        songHistory: '권정열이 20대 초반 겪었던 지독한 짝사랑의 자전적 경험을 솔직하게 녹여낸 곡으로, 10CM의 음악 세계 중 가장 애절한 명곡으로 평가받습니다.',
        artistDesc: '어쿠스틱 사운드를 기반으로 대중성과 인디 감성을 동시에 잡으며 수많은 히트곡을 탄생시킨 독보적 보컬리스트입니다.'
      },
      {
        id: 'bill-evans-waltz-for-debby',
        title: 'Waltz for Debby',
        artist: 'Bill Evans Trio (빌 에반스)',
        genre: 'jazz',
        genreLabel: '피아노 트리오 재즈 / 왈츠',
        lyric: '(연주곡) 피아노와 베이스, 브러시 드럼이 조용히 속삭이는 영혼의 대화.',
        releaseYear: '1961',
        album: 'Waltz for Debby',
        icon: '🎹',
        moods: ['peaceful', 'happy', 'flutter'],
        times: ['morning', 'late-morning', 'afternoon'],
        bandmanComment: '3/4박자 왈츠 리듬 위에서 빌 에반스의 투명한 피아노 보이싱과 천재 베이시스트 스콧 라파로의 멜로디컬한 베이스 인터플레이가 기적 같은 앙상블을 이룹니다. 밴드 세션이 단순 반주가 아닌 동등한 주인공으로 대화하는 역사적 명연입니다.',
        whyRecommend: '화창한 낮 시간, 커피 향과 함께 평화로운 사색을 즐기고 싶을 때 듣는 것만으로 공간 전체가 고급스러운 재즈 클럽으로 변신합니다.',
        songHistory: '빌 에반스가 어린 조카 데비(Debby)를 위해 작곡한 곡으로, 뉴욕 빌리지 뱅가드 클럽 라이브 실황 앨범에 실린 녹음본은 재즈 역사상 가장 서정적인 순간으로 꼽힙니다.',
        artistDesc: '‘재즈계의 쇼팽’이라 불리며 인상주의 클래식 화성을 재즈에 도입해 모던 재즈 피아노의 새로운 장을 연 거장입니다.'
      },
      {
        id: 'frank-ocean-thinkin-bout-you',
        title: 'Thinkin Bout You',
        artist: 'Frank Ocean (프랭크 오션)',
        genre: 'rnb',
        genreLabel: '얼터너티브 R&B / PBR&B',
        lyric: 'Or do you not think so far ahead? ‘Cause I been thinkin’ ‘bout forever.',
        releaseYear: '2012',
        album: 'channel ORANGE',
        icon: '🌌',
        moods: ['sad', 'melancholy', 'flutter'],
        times: ['dawn', 'night'],
        bandmanComment: '미니멀한 808 림샷 비트와 몽환적으로 일렁이는 신시사이저 패드 사운드, 그리고 프랭크 오션의 아찔하게 높은 가성(Falsetto)이 공간을 몽롱하게 채웁니다. 악기를 최소화했음에도 공간계 리버브의 깊이감이 엄청난 몰입감을 선사합니다.',
        whyRecommend: '새벽 감성에 젖어 잠들지 못할 때, 기억 저편 누군가를 떠올리며 나만의 내밀한 방 안에서 듣기에 더할 나위 없는 트랙입니다.',
        songHistory: 'PBR&B(얼터너티브 R&B)라는 새로운 장르의 부흥을 알린 명반 <channel ORANGE>의 오프닝 트랙으로, 제55회 그래미 어워드 최우수 어반 컨템포러리 앨범상을 수상했습니다.',
        artistDesc: '시적인 가사와 파격적인 음악적 구조로 2010년대 팝 음악계의 문법을 다시 쓴 천재적인 비저너리 아티스트입니다.'
      },
      {
        id: 'oasis-live-forever',
        title: 'Live Forever',
        artist: 'Oasis (오아시스)',
        genre: 'rock',
        genreLabel: '브릿팝 / 브리티시 록',
        lyric: 'Maybe I will never be all the things that I wanna be, now is not the time to cry, now’s the time to find out why.',
        releaseYear: '1994',
        album: "Definitely Maybe",
        icon: '🇬🇧',
        moods: ['happy', 'peaceful', 'flutter'],
        times: ['late-morning', 'afternoon'],
        bandmanComment: '토니 맥캐롤의 묵직한 4비트 드럼 인트로에 이어 리암 갤러거의 당당한 비음 보컬, 그리고 노엘 갤러거의 교과서 같은 펜타토닉 록 기타 솔로가 귓가를 강타합니다. 우울한 그런지 록에 맞서 “우린 영원히 살 거야”라고 외치는 긍정의 앤섬이죠.',
        whyRecommend: '답답한 일상에 기지개를 켜고 가슴을 쫙 펴고 싶을 때, 당당하고 낙관적인 브릿팝 밴드 사운드가 당신의 어깨에 힘을 실어줍니다.',
        songHistory: '너바나(Nirvana)의 어두운 정서에 반대하며 노엘 갤러거가 창고에서 일하던 시절 작곡한 희망의 찬가로, 오아시스를 전설로 만든 불멸의 히트곡입니다.',
        artistDesc: '영국 맨체스터 출신의 갤러거 형제를 주축으로 90년대 브릿팝 전성기를 이끌며 비틀즈 이후 가장 큰 문화적 충격을 안긴 전설적인 밴드입니다.'
      }
    ];

    /* =========================================================
       2. APPLICATION STATE MANAGEMENT
       ========================================================= */

    const state = {
      currentStep: 0, // 0: intro, 1: time, 2: mood, 3: genre, 4: loading, 5: result
      timeIndex: 2,   // 0~5 (Default: late-morning 2)
      selectedMood: null,
      selectedGenre: null,
      currentRecommendedSong: null
    };

    /* =========================================================
       3. DOM ELEMENTS
       ========================================================= */

    const screens = {
      intro: document.getElementById('screenIntro'),
      time: document.getElementById('screenTime'),
      mood: document.getElementById('screenMood'),
      genre: document.getElementById('screenGenre'),
      loading: document.getElementById('screenLoading'),
      result: document.getElementById('screenResult')
    };

    const timeSlider = document.getElementById('timeSlider');
    const timeWeatherIcon = document.getElementById('timeWeatherIcon');
    const timeNameLabel = document.getElementById('timeNameLabel');
    const timeDescLabel = document.getElementById('timeDescLabel');
    const sliderLabels = document.querySelectorAll('.slider-label-item');

    const moodButtons = document.querySelectorAll('.mood-btn');
    const genreButtons = document.querySelectorAll('.genre-btn');
    const genreBanner = document.getElementById('genreBanner');
    const genreBannerTitle = document.getElementById('genreBannerTitle');
    const genreBannerDesc = document.getElementById('genreBannerDesc');

    const toastAlert = document.getElementById('toastAlert');
    const toastMsg = document.getElementById('toastMsg');

    // Result elements
    const resultConditionBadge = document.getElementById('resultConditionBadge');
    const resBandmanComment = document.getElementById('resBandmanComment');
    const resVinylIcon = document.getElementById('resVinylIcon');
    const resGenreTag = document.getElementById('resGenreTag');
    const resSongTitle = document.getElementById('resSongTitle');
    const resArtistName = document.getElementById('resArtistName');
    const resLyric = document.getElementById('resLyric');
    const resWhyRecommend = document.getElementById('resWhyRecommend');
    const resSongHistory = document.getElementById('resSongHistory');
    const resArtistDesc = document.getElementById('resArtistDesc');
    const btnYoutube = document.getElementById('btnYoutube');

    /* =========================================================
       4. NAVIGATION & VALIDATION HELPERS
       ========================================================= */

    function showToast(message) {
      toastMsg.textContent = message;
      toastAlert.classList.add('show');
      setTimeout(() => {
        toastAlert.classList.remove('show');
      }, 2600);
    }

    function switchScreen(screenName) {
      Object.values(screens).forEach(screen => screen.classList.remove('active'));
      if (screens[screenName]) {
        screens[screenName].classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    /* =========================================================
       5. STEP 1: TIME CONTROLS & DYNAMIC BACKGROUND THEME
       ========================================================= */

    function updateTimeTheme(index) {
      state.timeIndex = parseInt(index, 10);
      const conf = TIME_CONFIG[state.timeIndex];

      // Update weather icon with bounce animation
      timeWeatherIcon.textContent = conf.weatherIcon;
      timeWeatherIcon.classList.remove('bounce');
      void timeWeatherIcon.offsetWidth; // trigger reflow
      timeWeatherIcon.classList.add('bounce');

      // Update labels
      timeNameLabel.textContent = conf.name;
      timeDescLabel.textContent = conf.desc;

      // Update slider ticks
      sliderLabels.forEach((label, idx) => {
        if (idx === state.timeIndex) {
          label.classList.add('active');
        } else {
          label.classList.remove('active');
        }
      });

      // Update Body Theme Class
      document.body.className = '';
      document.body.classList.add(conf.themeClass);
    }

    timeSlider.addEventListener('input', (e) => {
      updateTimeTheme(e.target.value);
    });

    sliderLabels.forEach(label => {
      label.addEventListener('click', () => {
        const idx = parseInt(label.getAttribute('data-index'), 10);
        timeSlider.value = idx;
        updateTimeTheme(idx);
      });
    });

    /* =========================================================
       6. STEP 2: MOOD CONTROLS
       ========================================================= */

    moodButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mood = btn.getAttribute('data-mood');
        state.selectedMood = mood;

        moodButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    /* =========================================================
       7. STEP 3: GENRE CONTROLS
       ========================================================= */

    genreButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const genre = btn.getAttribute('data-genre');
        state.selectedGenre = genre;

        genreButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        // Update Dynamic Banner
        const conf = GENRE_CONFIG[genre];
        if (conf) {
          genreBannerTitle.textContent = conf.title;
          genreBannerDesc.textContent = conf.desc;
          genreBanner.style.borderColor = 'var(--slider-fill)';
        }
      });
    });

    /* =========================================================
       8. RECOMMENDATION ENGINE & BANDMAN LOGIC
       ========================================================= */

    function selectRecommendedSong(timeIdx, moodKey, genreKey, excludeId = null) {
      const timeObj = TIME_CONFIG[timeIdx];
      const timeId = timeObj.id;

      // 1. If random genre chosen, pick a concrete genre or allow all
      let candidatePool = [...SONG_DATABASE];

      if (excludeId) {
        candidatePool = candidatePool.filter(song => song.id !== excludeId);
      }

      // If user selected specific genre (and not 'random')
      if (genreKey && genreKey !== 'random') {
        const genreMatches = candidatePool.filter(s => s.genre === genreKey);
        if (genreMatches.length > 0) {
          candidatePool = genreMatches;
        }
      }

      // Score matching
      const scored = candidatePool.map(song => {
        let score = 0;
        if (song.moods.includes(moodKey)) score += 3;
        if (song.times.includes(timeId)) score += 2;
        if (song.genre === genreKey) score += 2;
        // Add subtle random jitter for variety
        score += Math.random() * 1.5;
        return { song, score };
      });

      scored.sort((a, b) => b.score - a.score);

      // Return the top scored song
      return scored[0] ? scored[0].song : SONG_DATABASE[0];
    }

    function renderResultScreen(song) {
      state.currentRecommendedSong = song;

      const timeConf = TIME_CONFIG[state.timeIndex];
      const moodName = MOOD_NAMES[state.selectedMood] || '마음';
      const genreTitle = state.selectedGenre === 'random' ? '🎲 랜덤 장르' : (GENRE_CONFIG[state.selectedGenre]?.title.split(' ')[0] || song.genreLabel);

      // Condition Badge
      resultConditionBadge.textContent = `${timeConf.weatherIcon} ${timeConf.name.split(' ')[0]} · ${moodName.split(' ')[0]} · ${genreTitle}`;

      // Song Info
      resVinylIcon.textContent = song.icon || '💿';
      resGenreTag.textContent = song.genreLabel || song.genre.toUpperCase();
      resSongTitle.textContent = song.title;
      resArtistName.textContent = `${song.artist} (${song.releaseYear} · ${song.album})`;
      resLyric.textContent = song.lyric;

      // Bandman Commentary
      resBandmanComment.textContent = `"${song.bandmanComment}"`;
      resWhyRecommend.textContent = song.whyRecommend;
      resSongHistory.textContent = song.songHistory;
      resArtistDesc.textContent = song.artistDesc;

      // Youtube Link
      const query = encodeURIComponent(`${song.artist} ${song.title}`);
      btnYoutube.href = `https://www.youtube.com/results?search_query=${query}`;
    }

    function executeRecommendation() {
      // Show loading screen for 1 second for atmospheric anticipation
      switchScreen('loading');

      const loadingPhrases = [
        { title: '진공관 앰프 예열 중...', desc: '밴드맨이 캐비닛 스피커에 잭을 꽂고 볼륨 노브를 맞추고 있습니다.' },
        { title: '기타 스트링 조율 중...', desc: '당신이 지나고 있는 시간대의 주파수와 공명하는 코드를 잡고 있습니다.' },
        { title: '턴테이블 바늘 안착 중...', desc: '오늘 당신의 마음에 가장 다정한 위로가 될 사운드트랙을 꺼냅니다.' }
      ];
      const phrase = loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];
      document.getElementById('loadingTextTitle').textContent = phrase.title;
      document.getElementById('loadingTextSub').textContent = phrase.desc;

      setTimeout(() => {
        const song = selectRecommendedSong(state.timeIndex, state.selectedMood, state.selectedGenre);
        renderResultScreen(song);
        switchScreen('result');
      }, 1000);
    }

    /* =========================================================
       9. NAVIGATION EVENT LISTENERS & FLOW
       ========================================================= */

    // Intro -> Step 1 (Time)
    document.getElementById('btnStart').addEventListener('click', () => {
      switchScreen('time');
    });

    // Step 1 (Time) -> Step 2 (Mood)
    document.getElementById('btnTimeBack').addEventListener('click', () => {
      switchScreen('intro');
    });
    document.getElementById('btnTimeNext').addEventListener('click', () => {
      switchScreen('mood');
    });

    // Step 2 (Mood) -> Step 3 (Genre)
    document.getElementById('btnMoodBack').addEventListener('click', () => {
      switchScreen('time');
    });
    document.getElementById('btnMoodNext').addEventListener('click', () => {
      if (!state.selectedMood) {
        showToast('오늘 가장 와닿는 기분을 하나 선택해 주세요! 😊');
        return;
      }
      switchScreen('genre');
    });

    // Step 3 (Genre) -> Result
    document.getElementById('btnGenreBack').addEventListener('click', () => {
      switchScreen('mood');
    });
    document.getElementById('btnShowResult').addEventListener('click', () => {
      if (!state.selectedGenre) {
        showToast('좋아하는 장르(또는 랜덤 장르)를 선택해 주세요! 🎸');
        return;
      }
      executeRecommendation();
    });

    // Result Actions: Re-recommend same conditions
    document.getElementById('btnReRecommend').addEventListener('click', () => {
      const currentId = state.currentRecommendedSong ? state.currentRecommendedSong.id : null;
      const nextSong = selectRecommendedSong(state.timeIndex, state.selectedMood, state.selectedGenre, currentId);
      renderResultScreen(nextSong);
      showToast('같은 분위기의 또 다른 명곡을 조율했습니다! 🎶');
    });

    // Result Actions: Complete Random Surprise
    document.getElementById('btnSurpriseMe').addEventListener('click', () => {
      const currentId = state.currentRecommendedSong ? state.currentRecommendedSong.id : null;
      let pool = SONG_DATABASE.filter(s => s.id !== currentId);
      const randomSong = pool[Math.floor(Math.random() * pool.length)];
      renderResultScreen(randomSong);
      showToast('🎲 밴드맨의 즉흥 영감으로 뽑은 깜짝 명곡입니다!');
    });

    // Result Actions: Reset All
    document.getElementById('btnResetAll').addEventListener('click', () => {
      state.selectedMood = null;
      state.selectedGenre = null;
      state.currentRecommendedSong = null;

      moodButtons.forEach(b => b.classList.remove('selected'));
      genreButtons.forEach(b => b.classList.remove('selected'));

      genreBannerTitle.textContent = '아직 선택되지 않았습니다';
      genreBannerDesc.textContent = '아래에서 마음에 드는 음악 장르 버튼을 눌러주세요.';
      genreBanner.style.borderColor = 'var(--button-border)';

      updateTimeTheme(2);
      timeSlider.value = 2;

      switchScreen('intro');
    });

    // Initialization
    updateTimeTheme(2);