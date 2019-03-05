import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Wrapper = styled(Element)`
  padding: 101px 14.4% 137px 14.4%;
  background-color: #0f1723;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div.title {
    font-size: 38px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;
    color: #ffffff;
  }

  & > div.desc {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

    margin-top: 18px;
  }

  & > div.desc2 {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #9b9b9b;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 69px 8% 60px 8%;
    & > div.desc,
    & > div.desc2 {
      font-size: 13px;
    }
  }
`;

const ScheduleContent = styled.div`
  margin-top: 43px;
  width: 100%;

  & > span {
    font-size: 51px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.75;
    text-align: center;
    color: #003e61;

    margin: 40px 0;
  }

  @media only screen and (max-device-width: 480px) {
    & > span {
      font-size: 41px;
    }
  }
`;

const TrackTable = styled.div`
  width: 100%;
  border-bottom: 2px solid #4c4c4c;
`;

const TrackTableHeader = styled.div`
  padding-left: 110px;
  padding-bottom: 19px;
  display: flex;
  & > div {
    flex: 1;
    & > img {
      width: 100px;
    }
  }
`;

const TrackTableHeaderMobile = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 19px;
  margin-top: 45px;
  & > img {
    width: 100px;
    height: 33.8px;
  }
`;

const TrackTableColumn = styled.div`
  display: flex;

  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 11px 6px;

  border-top: 2px solid #4c4c4c;

  & > div {
    padding-right: 25px;
    & > p:nth-child(1) {
      margin-top: 0;
      margin-bottom: 10px;
    }

    & > p:nth-child(2) {
      margin: 0;
    }
  }

  & > div:nth-child(1) {
    word-wrap: break-word;
    width: 110px;
    color: #9b9b9b;
  }
  & > div:nth-child(2) {
    flex: 3;
    color: white;

    & > p:nth-child(1) {
      color: #45fc17;
    }
  }
  & > div:nth-child(3) {
    flex: 3;
    color: white;

    & > p:nth-child(1) {
      color: #00f0e4;
    }
  }
  & > div:nth-child(4) {
    flex: 3;
    color: white;

    & > p:nth-child(1) {
      color: #ffd26e;
    }
  }
`;

const ProgramContent = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 30%;
    margin-bottom: 34px;
  }

  @media only screen and (max-device-width: 480px) {
    & > img {
      width: 60%;
    }
  }
`;

const ProgramItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-device-width: 480px) {
    display: block;
  }
`;

const ProgramItem = styled.div`
  width: 32%;
  border: solid 1px #003e61;
  padding: 15px 20px;
  & > p:nth-child(1) {
    color: #3dea11;
    margin-top: 0;
  }

  & > p:nth-child(2) {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    color: #ededed;
    margin-bottom: 0;
  }

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    height: 140px;
    margin-bottom: 23px;
  }
`;

const Boarder = styled.div`
  background-color: #003e61;
  width: 100%;
  height: 2px;
  margin-top: 94px;
  margin-bottom: 94px;
`;

export interface ScheduleProps {
  isPhone: boolean;
}

export interface ScheduleState {
  tracks: Array<Array<string | string[]>>;
}
export default class Schedule extends React.Component<
  ScheduleProps,
  ScheduleState
> {
  constructor(props: ScheduleProps) {
    super(props);
    this.state = {
      tracks: [
        [
          "10:00~10:55",
          ["노재춘", "RxJava 구독과 구독 제거 메커니즘 설명"],
          ["김성일", "안드로이드 TDD 적용기"],
          ["정승욱", "동적 맵 프레임워크와 인터렉션 구현하기"]
        ],
        [
          "11:10~11:40",
          [
            "하동현",
            "지금까지 이런 간단한 Logic 처리는 없었다. 이것은 Rx인가, UI 이벤트인가?"
          ],
          ["장선옥", "Android Project with Multi Module"],
          ["Yusuke Konishi (English)", "Master of Android Theme "]
        ],
        [
          "13:10~13:40",
          ["박상권", "Kotlin 꼭 해야하나요?"],
          ["김현", "모바일에서 오프라인 모드 적용 사례"],
          ["장인수", "Flutter Native Module Bady Step"]
        ],
        [
          "13:55~14:40",
          ["남상균", "코틀린 디자인 패턴"],
          ["황성현", "Clean Architecture (in Android) Revised"],
          ["노현석", "MotionLayout 무릎까지 담궈보기"]
        ],
        [
          "14:55~15:45",
          ["정동진", "코루틴 너 은행에서 뭐하니?"],
          ["강사룡", "안드로이드 아키텍처 총정리"],
          ["양찬석", "구글 플레이의 다이나믹 딜리버리 (APK는 이제 안녕)"]
        ],
        [
          "15:55~16:25",
          ["권태환", "코루틴 안전! 이쁘게 코루틴 사용하는 방법은?"],
          ["박민석", "PWA 품은 안드로이드 웹뷰 경험기"],
          ["안명욱", "Window 다루는 방법"]
        ],
        [
          "16:40~17:25",
          ["정현지", "Dagger vs Koin 무엇이 좋을까요?"],
          ["남반석", "SVC 패턴으로 앱 쉽게 만들기"],
          ["차영호", "Android Gradle Plugin 버그 잡기"]
        ],
        [
          "17:40~18:10",
          ["김범준", "Release ViewPager2!"],
          ["박미륵", "Advanced MVP"],
          ["신정아", "Tensorflow Lite 부터 MLKit, Mobile GPU 활용까지"]
        ]
      ]
    };
  }

  public render() {
    return (
      <Wrapper name="schedule">
        <div className="title">SCHEDULE</div>
        <div className="desc">드로이드 나이츠 2019는 3트랙으로 진행됩니다.</div>
        <div className="desc2">2월 중에 전체 세션이 공개됩니다.</div>
        <ScheduleContent>
          {this.props.isPhone ? (
            // tracktable for mobile
            <TrackTable>
              {/* track 1 */}
              <TrackTableHeaderMobile>
                <img src={require("../assets/images/track-1.png")} alt="" />
              </TrackTableHeaderMobile>
              {this.state.tracks.map(value => (
                <TrackTableColumn>
                  <div style={{ width: 70 }}>{value[0]}</div>
                  <div>
                    <p>{value[1][0]}</p>
                    <p>{value[1][1]}</p>
                  </div>
                </TrackTableColumn>
              ))}
              {/* track 2 */}
              <TrackTableHeaderMobile>
                <img src={require("../assets/images/track-2.png")} alt="" />
              </TrackTableHeaderMobile>
              {this.state.tracks.map(value => (
                <TrackTableColumn>
                  <div style={{ width: 70 }}>{value[0]}</div>
                  <div>
                    <p style={{ color: "#00f0e4" }}>{value[2][0]}</p>
                    <p>{value[2][1]}</p>
                  </div>
                </TrackTableColumn>
              ))}
              {/* track 3 */}
              <TrackTableHeaderMobile>
                <img src={require("../assets/images/track-3.png")} alt="" />
              </TrackTableHeaderMobile>
              {this.state.tracks.map(value => (
                <TrackTableColumn>
                  <div style={{ width: 70 }}>{value[0]}</div>
                  <div>
                    <p style={{ color: "#ffd26e" }}>{value[3][0]}</p>
                    <p>{value[3][1]}</p>
                  </div>
                </TrackTableColumn>
              ))}
            </TrackTable>
          ) : (
            // tracktable for com
            <TrackTable>
              <TrackTableHeader>
                <div>
                  <img src={require("../assets/images/track-1.png")} alt="" />
                </div>
                <div>
                  <img src={require("../assets/images/track-2.png")} alt="" />
                </div>
                <div>
                  <img src={require("../assets/images/track-3.png")} alt="" />
                </div>
              </TrackTableHeader>
              {this.state.tracks.map(value => (
                <TrackTableColumn>
                  <div>{value[0]}</div>
                  <div>
                    <p>{value[1][0]}</p>
                    <p>{value[1][1]}</p>
                  </div>

                  <div>
                    <p>{value[2][0]}</p>
                    <p>{value[2][1]}</p>
                  </div>

                  <div>
                    <p>{value[3][0]}</p>
                    <p>{value[3][1]}</p>
                  </div>
                </TrackTableColumn>
              ))}
            </TrackTable>
          )}
        </ScheduleContent>
        <Boarder />
        <div className="title">PROGRAM</div>
        <div className="desc">
          2019 드로이드 나이츠는 세션 이외의 다양한 프로그램을 준비하고
          있습니다.
        </div>
        <ProgramContent>
          <img src={require("../assets/images/program.png")} alt="" />
          <ProgramItemWrapper>
            <ProgramItem>
              <p>코드리뷰</p>
              <p>
                다른사람들은 어떻게 코딩할까요? <br /> 서로 코드를 공유해봅시다.
              </p>
            </ProgramItem>
            <ProgramItem>
              <p>코드랩</p>
              <p>
                해봐야지 생각하면서 미뤄둔 기술이 있나요? 드로이드 나이츠에서
                한번 시작해보세요!
              </p>
            </ProgramItem>
            <ProgramItem>
              <p>실시간 퀴즈쇼</p>
              <p>
                당신의 개발력을 뽐내보세요! <br />
                푸짐한 상품이 함께합니다.
              </p>
            </ProgramItem>
          </ProgramItemWrapper>
        </ProgramContent>
      </Wrapper>
    );
  }
}
