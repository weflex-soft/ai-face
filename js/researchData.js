var resultTitle, resultExplain, resultCeleb;

function getFaceData (val, gender) {
	if (gender) {
		switch (val) {
			case '달걀형':
				resultTitle = '이지적이고 우아한 달걀형';
				resultExplain = '부드러운 곡선형으로  갸름한 얼굴형이 누구에게나 호감형이다.\n첫인상이 좋아 인맥이 넓다.\n주위에 사람들이 많아 연애할때 구설수를 조심하는 것이 좋다.\n결정적일때 결단력이 다소 부족하여 의도치않은 오해를 살 수 있으니 유의하도록 하자.';
				resultCeleb = '달걀형 연예인: 이종석, 이기광, 정우성, 차은우, 조인성, 안재현, G드레곤 등..';
				resultIcon = 'm2';
				break;
			case '둥근형':
				resultTitle = '평화주의자or회색분자 둥근형';
				resultExplain = '애정이넘치고 생각도 원만하며 착실함\n눈치가빠르고 주어진일에 일처리능력도 탁월함\n사람들과의 충돌을싫어해 가급적 내의견을 강하게 이야기하지 않는 타입\n역으로 너무 둥글둥글한 성격으로 중심을 잃을때가 있으니 주의할것.\n이성에게 관심이많고 끊이지않고 이성이 생기는 타입';
				resultCeleb = '둥근형 연예인: 조정석, 송중기, 신동, 권순일 등..';
				resultIcon = 'm1';
				break;
			case '직사각형':
				resultTitle = '건강체질의 직사각형 얼굴';
				resultExplain = '타고난 건강체질로 인해 장수할 수 있음\n복이많아 전체적인 운이좋음.\n평생 크게 고생하지 않고 모든것을 풍족하게 살 수 있음  마음이 여유롭고  대인관계가 좋음';
				resultCeleb = '직사각형 연예인: 이동욱, 김래원, 최시원, 이윤석, 노홍철 등..';
				resultIcon = 'm3';
				break;
			case '네모형':
				resultTitle = '차가운 인상의 네모형';
				resultExplain = '각이진 얼굴로 인해 처음엔 상대방에게 호감형이 되기 쉽지 않지만 신뢰감을 주는 인상이기도 하다.\n성격이 직선적이며 자기주장이 강해 내가 하고자 하는것을 밀고 나가는 적극적이고 성실한 타입';
				resultCeleb = '네모형 연예인: 이병헌, 김진수, 장동건, 김우빈 등..';
				resultIcon = 'm4';
				break;
			case '마름모형':
				resultTitle = '마름모형';
				resultExplain = '참을성이 높고 하고자 하는일을 행동으로 옮기는데 빠르다.\n고집을 줄이고 노여움을 줄인다면 완벽한 인생을 살 수 있다.\n절대 남의 험담을 하지 말도록 하고 신용을 잃고 이성과의교제를 길게 할 수 없는 일이 생길 수 있다.\n인생에 있어 인간관계는 매우 중요함을 유념할 것';
				resultCeleb = '마름모형 연예인: 윤종화, 신성록 등..';
				resultIcon = 'm5';
				break;
			case '사다리꼴':
				resultTitle = '사다리꼴';
				resultExplain = '이마보다 광대가 넓게 발달된형으로   활동적이고 솔선수범하는 타입으로 리더쉽이좋고 사교적이다.\n금전운이 좋으나 돈을 쉽게쓰는 성향이 있다.\n직업은 남을 직접적으로 돕는일이 좋고 간호사, 의사, 사회복지사 등이 좋다.';
				resultCeleb = '사다리꼴 연예인: 동해, 최다니엘 등..';
				resultIcon = 'm6';
				break;
			case '하트형':
				resultTitle = '부드러운 카리스마 하트형';
				resultExplain = '다정다감하고  상냥한말투로 늘 주위에 사람들이 좋아한다.\n이성을 대함에 있어 최선을 다하고 한눈 팔지 않는다. 로맨틱 하다.\n이마에 재물운도 있어  큰 욕심만 부리지 않는다면 모든일에 넓게 성공 할 수 있는타입. 예술가에 적합하다.';
				resultCeleb = '하트형 연예인: 원빈, 육성재, 뷔, 서강준 등..';
				resultIcon = 'm7';
				break;
			case '역삼각형':
				resultTitle = '자유로운 영혼 역삼각형(예술가,연예인,종교인)';
				resultExplain = '어찌보면 비현실적으로 비춰질 수 있는타입\n세상  모든것을 사랑하고 긍정적으르 바라본다.\n하는일에 있어  끈기가 조금 부족하기도 하여 끝맺음이 아쉬울때가 종종 있지만 그것을  커버할 수 있을만큼의 아이디어와 순발력으로 사람들에게 인정 받는다.\n버는것에 비하여 소비가 크므로 그부분에 유의가 필요하다.(폼생폼사)';
				resultCeleb = '역삼각형 연예인: 현빈, 양세종 등..';
				resultIcon = 'm8';
				break;
			default:
				resultTitle = '알수없음';
				resultExplain = '';
				resultCeleb = '';
		}
	} else {
		switch (val) {
			case '달걀형':
				resultTitle = '이지적이고 우아한 달걀형';
				resultExplain = '부드러운 곡선형으로  갸름한 얼굴형이 누구에게나 호감형이다.\n첫인상이 좋아 인맥이 넓다.\n주위에 사람들이 많아 연애할때 구설수를 조심하는 것이 좋다.\n결정적일때 결단력이 다소 부족하여 의도치않은 오해를 살 수 있으니 유의하도록 하자.';
				resultCeleb = '달걀형 연예인: 소녀시대 윤아, 이나은, 송지효, 서예지, 이연희, 손예진, 김희선, 송혜교, 김연아 등..';
				resultIcon = 'f2';
				break;
			case '둥근형':
				resultTitle = '평화주의자or회색분자 둥근형';
				resultExplain = '애정이넘치고 생각도 원만하며 착실함\n눈치가빠르고 주어진일에 일처리능력도 탁월함\n사람들과의 충돌을싫어해 가급적 내의견을 강하게 이야기하지 않는 타입\n역으로 너무 둥글둥글한 성격으로 중심을 잃을때가 있으니 주의할것.\n이성에게 관심이많고 끊이지않고 이성이 생기는 타입';
				resultCeleb = '둥근형 연예인: 유이, 민아, 유아, 김다미, 공효진, 문근영, 김민경, 홍현희 등..';
				resultIcon = 'f1';
				break;
			case '직사각형':
				resultTitle = '건강체질의 직사각형 얼굴';
				resultExplain = '타고난 건강체질로 인해 장수할 수 있음\n복이많아 전체적인 운이좋음.\n평생 크게 고생하지 않고 모든것을 풍족하게 살 수 있음  마음이 여유롭고 대인관계가 좋음';
				resultCeleb = '직사각형 연예인: 려원, 로제, 신비 등..';
				resultIcon = 'f3';
				break;
			case '네모형':
				resultTitle = '차가운 인상의 네모형';
				resultExplain = '각이진 얼굴로 인해 처음엔 상대방에게 호감형이 되기 쉽지 않지만 신뢰감을 주는 인상이기도 하다.\n성격이 직선적이며 자기주장이 강해 내가 하고자 하는것을 밀고 나가는 적극적이고 성실한 타입';
				resultCeleb = '네모형 연예인: 박경림, 정유미, 김태리, 정채연, 나나, 한효주 등..';
				resultIcon = 'f4';
				break;
			case '마름모형':
				resultTitle = '마름모형';
				resultExplain = '참을성이 높고 하고자 하는일을 행동으로 옮기는데 빠르다.\n고집을 줄이고 노여움을 줄인다면 완벽한 인생을 살 수 있다.\n절대 남의 험담을 하지 말도록 하고 신용을 잃고 이성과의교제를 길게 할 수 없는 일이 생길 수 있다.\n인생에 있어 인간관계는 매우 중요함을 유념할 것';
				resultCeleb = '마름모형 연예인: 문채원, 배두나, 모모, 천우희, 김희애, 이민정, 송경아, 이하이 등..';
				resultIcon = 'f5';
				break;
			case '사다리꼴':
				resultTitle = '사다리꼴';
				resultExplain = '이마보다 광대가 넓게 발달된형으로   활동적이고 솔선수범하는 타입으로 리더쉽이좋고 사교적이다.\n금전운이 좋으나 돈을 쉽게쓰는 성향이 있다.\n직업은 남을 직접적으로 돕는일이 좋고 간호사, 의사, 사회복지사 등이 좋다.';
				resultCeleb = '사다리꼴 연예인: 김민희, 크리스탈, 김도연, 태연, 효연, 가인 등..';
				resultIcon = 'f6';
				break;
			case '하트형':
				resultTitle = '부드러운 카리스마 하트형';
				resultExplain = '다정다감하고  상냥한말투로 늘 주위에 사람들이 좋아한다.\n이성을 대함에 있어 최선을 다하고 한눈 팔지 않는다. 로맨틱 하다.\n이마에 재물운도 있어  큰 욕심만 부리지 않는다면 모든일에 넓게 성공 할 수 있는타입. 예술가에 적합하다.';
				resultCeleb = '하트형 연예인: 수지, 김사랑, 이성경, 사나, 유라, 신민아, 이하늬, 안지영, 오나라 등..';
				resultIcon = 'f7';
				break;
			case '역삼각형':
				resultTitle = '자유로운 영혼 역삼각형(예술가,연예인,종교인)';
				resultExplain = '어찌보면 비현실적으로 비춰질 수 있는타입\n세상  모든것을 사랑하고 긍정적으르 바라본다.\n하는일에 있어  끈기가 조금 부족하기도 하여 끝맺음이 아쉬울때가 종종 있지만 그것을  커버할 수 있을만큼의 아이디어와 순발력으로 사람들에게 인정 받는다.\n버는것에 비하여 소비가 크므로 그부분에 유의가 필요하다.(폼생폼사)';
				resultCeleb = '역삼각형 연예인: 손담비, 제시, 청하, 오윤아, 김나영, 현아, 한소희, 임수향, NS윤지, 화사, 차예련 등..';
				resultIcon = 'f8';
				break;
			default:
				resultTitle = '알수없음';
				resultExplain = '';
				resultCeleb = '';
		}
	}
	return [resultTitle, resultExplain, resultCeleb, resultIcon];
}

function getFaceImg(val) {
	switch (val) {
		//"김태리","나나","박경림","정유미","정채연","한효주","김연아","김희선","서예지","윤아","손예진","송지효","송혜교","이나은","이연희","공효진","김다미","김민경","문근영","민아","유이","홍현희","김희애","모모","문채원","배두나","송경아","이민정","이하이","천우희","가인","김도연","김민희","크리스탈","태연","효연","NS윤지","김나영","손담비","오윤아","임수향","제시","차예련","청하","한소희","현아","화사","려원","로제","신비","김사랑","사나","수지","신민아","안지영","오나라","유라","이성경","이하늬"
		case '김태리':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202203%2F20220307140537732.jpg'; break;
		case '나나':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201711%2F20171106150832900.jpg'; break;
		case '박경림':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202101%2F202101071226347-1535491.jpg'; break;
		case '정유미':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202107%2F2021070714240277.jpg'; break;
		case '정채연':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211123224615419.jpg'; break;
		case '한효주':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202006%2F20200609190539136.jpg'; break;
		case '김연아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F167%2F201908071438073161.jpg'; break;
		case '김희선':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F46%2F20220411181535111.png'; break;
		case '서예지':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202003%2F20200320145618284.jpg'; break;
		case '윤아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202108%2F20210831170143146.jpg'; break;
		case '손예진':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202002%2F20200228151453288.jpg'; break;
		case '송지효':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202009%2F20200921132005527.jpg'; break;
		case '송혜교':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F154%2F20200305165405621.jpg'; break;
		case '이나은':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202007%2F20200730114427777-3319306.jpg'; break;
		case '이연희':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202011%2F20201130140825850.png'; break;
		case '공효진':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F80%2F201807101753055661.jpg'; break;
		case '김다미':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202006%2F20200623160459293.jpg'; break;
		case '김민경':
			faceImg = 'https://search.pstatic.net/common?type=f&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F9%2F20210709133539541.png'; break;
		case '문근영':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202204%2F20220422143629460.jpg'; break;
		case '민아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202103%2F2021031218062655.jpg'; break;
		case '유이':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201910%2F20191007155023847.jpg'; break;
		case '홍현희':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F37%2F202107201720371701.jpg'; break;
		case '김희애':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F47%2F20160704151359361.jpg'; break;
		case '모모':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211102130923606.jpg'; break;
		case '문채원':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F174%2F202201271904056801.jpg'; break;
		case '배두나':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201904%2F20190430154004636-1290127.jpg'; break;
		case '송경아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202002%2F20200210115938653.jpg'; break;
		case '이민정':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201702%2F20170214105716341-9147259.jpg'; break;
		case '이하이':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202007%2F20200722185130327.jpg'; break;
		case '천우희':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211108164214238.jpg'; break;
		case '가인':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201910%2F2019102515145051.jpg'; break;
		case '김도연':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211111201837905.jpg'; break;
		case '김민희':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201408%2F20140825155028107-6430364.jpg'; break;
		case '크리스탈':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202010%2F20201014144001578.jpg'; break;
		case '태연':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202202%2F20220218151519443.jpg'; break;
		case '효연':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F189%2F202205231851423311.jpg'; break;
		case 'NS윤지':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202112%2F20211222154051982.jpg'; break;
		case '김나영':
			faceImg = 'https://search.pstatic.net/common?type=f&size=1669x2086&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F78%2F2022030814343348491_thumb.jpg'; break;
		case '손담비':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202009%2F20200916153347729.jpg'; break;
		case '오윤아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202011%2F20201104132512321.jpg'; break;
		case '임수향':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202004%2F20200427110839148.jpg'; break;
		case '제시':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F61%2F202204141343566651.png';
		case '차예련':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202005%2F20200507153933637.jpg'; break;
		case '청하':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211119192433956.jpg'; break;
		case '한소희':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202001%2F20200113143850805.jpg'; break;
		case '현아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F161%2F20210906152552611.jpg'; break;
		case '화사':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F64%2F202109161442525261.png';
		case '려원':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202011%2F20201118212705564.jpg'; break;
		case '로제':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202103%2F2021031117185759.jpg'; break;
		case '신비':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202202%2F20220209154615243.jpg'; break;
		case '김사랑':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F186%2F201905161652481051.jpg'; break;
		case '사나':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211102130955667.jpg'; break;
		case '수지':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201908%2F20190829111126539.jpg'; break;
		case '신민아':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202110%2F20211028162722613.jpg'; break;
		case '안지영':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202204%2F20220418122411356.jpg'; break;
		case '오나라':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202012%2F20201229201640810-3121279.jpg'; break;
		case '유라':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201905%2F20190527151320917.jpg'; break;
		case '이성경':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F85%2F20161011140201781.jpg'; break;
		case '이하늬':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202106%2F20210617145942474.jpg'; break;
		case '김우빈':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201705%2F20170522111824968-8048355.jpg'; break;
		case '김진수':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201807%2F20180727115525996-2168614.jpg'; break;
		case '이병헌':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201810%2F201810021644077.jpg'; break;
		case '장동건':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F104%2F201904151435119511.jpg'; break;
		case 'G드래곤':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202204%2F20220404103204357.jpg'; break;
		case '안재현':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F101%2F202103161439044431.jpg'; break;
		case '이기광':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202203%2F20220318195931467.jpg'; break;
		case '이종석':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F168%2F201607191909184571.jpg'; break;
		case '정우성':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201812%2F20181220111450105.jpg'; break;
		case '조인성':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F181%2F201710261740338821.jpg'; break;
		case '차은우':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202205%2F20220509185206996.jpg'; break;
		case '권순일':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202111%2F20211122144707569.png'; break;
		case '송중기':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202006%2F20200619172124928.jpg'; break;
		case '신동':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202103%2F20210312183152774.jpg'; break;
		case '조정석':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202108%2F202108201044543.jpg'; break;
		case '신성록':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202202%2F20220224154626470.jpg'; break;
		case '윤종화':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201503%2F20150310103310897.jpg'; break;
		case '동해':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202103%2F20210312180111688.jpg'; break;
		case '최다니엘':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201802%2F20180219152500994.jpg'; break;
		case '양세종':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202203%2F20220329121101156.jpg'; break;
		case '현빈':
			faceImg = 'https://search.pstatic.net/common?type=f&size=240x300&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190909110909451-6101473.jpg'; break;
		case '김래원':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201701%2F20170112145759747-9836275.jpg'; break;
		case '노홍철':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F190%2F201607181718224321.jpg'; break;
		case '이동욱':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201711%2F20171129135524255.jpg'; break;
		case '이윤석':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F43%2F20140409181117491.jpg'; break;
		case '최시원':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F142%2F201910111053492911.png'; break;
		case '뷔':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202107%2F20210701001431471.jpg'; break;
		case '서강준':
			faceImg = 'https://search.pstatic.net/common?type=f&size=240x300&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202006%2F20200609104458757-5442801.jpg'; break;
		case '원빈':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201110%2F20111006113810844.jpg'; break;
		case '육성재':
			faceImg = 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202202%2F20220210154835588.jpg'; break;
		default:
			faceImg = './img/noimg.gif';
	}

	return faceImg;
}