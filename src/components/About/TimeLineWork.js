import React from 'react'
import { MdWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimeLineWork = () => {
  return (
    <VerticalTimeline layout="5-column-right" className="vertical-timeline-work">
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)' }}
                date="Aug 2020 - May 2021"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Incedo Inc.</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
                <p>
                    <b className='blue'>Backend Engineer </b>on IncedoPay, a B2B/B2C payments platform used by prestigious U.S. banks. Part of the Node.js team
                    responsible for the backend infrastructure.
                </p>
                <p>
                    Developed new APIs for client onboarding and payment method selection using<b className='blue'> Node.js. </b>Refactored and optimized existing APIs,
                    achieving a 10x performance boost and enhancing the product’s robustness.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)'}}
                date="Jun 2021 - Sep 2021"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Unolo</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
                <p>
                    Was tasekd with the job of transitioning existing <b className='blue'>EJS pages</b>
                    to <b className='blue'>React based components</b>
                </p>
                <p>
                    Reworked the API calls for fetching data and integrated them to the <b className='blue'>production build </b>
                 & Developed a new clients page UI using Material UI Datagrid for React, Apollo GraphQL and Google Markerclusterer
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)' }}
                date="Jun 2020 - Aug 2020"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">StrideAhead</h3>
                <h4 className="vertical-timeline-element-subtitle">Design Intern</h4>
                <p>
                    Implemented design ideas through <b className='blue'>wireframing</b> tools such as <b className='blue'>Figma & Illustrator</b>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
  )
}

export default TimeLineWork