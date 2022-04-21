import React, { useEffect, useState, Fragment, PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";
import io from "socket.io-client";
import { Redirect } from "react-router";
import { Line } from "react-chartjs-2";
import axios from 'axios'
import "../../static/style.css"
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function SalaryChart() {

  const data = [
    { name: '<0.5k', salary: '2000'},
    { name: '0.5k+', salary: '10000'},
    { name: '1k+', salary: '9000'},
    { name: '1.5k+', salary: '10000'},
    { name: '2k+', salary: '15000'},
    { name: '2.5k+', salary: '9500'},
    { name: '3k+', salary: '15000'},
    { name: '3.5k+', salary: '7000'},
    { name: '4k+', salary: '10000'},
    { name: '4.5k+', salary: '4000'},
    { name: '5k+', salary: '7000'},
    { name: '5.5k+', salary: '3500'},
    { name: '6k+', salary: '4000'},
    { name: '6.5k+', salary: '2000'},
    { name: '7k+', salary: '2000'},    
  ];
    
  return (
    <div>      
      <Fragment>
      <div class="salaries-page">
    <div class="container">

      <div class="row">
        <div class="col-sm-12">
          <div class="page-header">
            <div class="page-header--content">
              <div class="page-header--title">
                <h1>
                  Зарплати

                  
                    
                  

                  
                    
                  
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row salaries-page--content">
        <div class="col-sm-12 mobile-paddings-0">

          

          <div class="salaries-grid">
            

            <div class="salaries-summary">
              <div class="summary-stastistics">
              <div class="summary-stastistics--item summary-stastistics--item_vacancies">
                  <div class="summary-title summary-title--show-color">
                    <a href="/jobs/" class="summary-title--content">
                      <span class="summary-title--text">Зв'яжіться з рекрутером в нашому спеціальному чаті - DevConnectorChat</span>                    
                    </a>
                  </div>
                  <div class="summary-list">
                    

                    <div class="summary-item">
                      <div class="summary-item--description">
                        
                      Після того, як Вас обрав рекрутер, зайдіть в спеціальний чат компанії за посиланням:  
                        
                      </div>                     
                    </div>

                    <div class="summary-item summary-item_range">
                      <div class="summary-item--description">
                        
                      <p><a href="#">DevConnectorChat</a></p>
                        
                      </div>                     
                    </div>
                  </div>

                  <div class="summary-item summary-item_range">
                      <div class="summary-item--description">
                    <ol>
                     <li>1. Зареєструйтеся в чаті;</li>
                     <li>2. Зайдіть в кімнату необхідної компанії;</li>
                     <li>3. Напишіть рекрутеру.</li>                     
                    </ol>    
                      </div>                     
                    </div>
                </div>



                <div class="summary-stastistics--item summary-stastistics--item_vacancies">
                  <div class="summary-title summary-title--show-color">
                    <a href="/jobs/" class="summary-title--content">
                      <span class="summary-title--text">Велика кількість вакансій</span>                    
                    </a>
                  </div>
                  <div class="summary-list">
                    

                    <div class="summary-item">
                      <div class="summary-item--description">
                        
                      Ми робимо все, щоб кожному відвідувачу DevConnector запам’ятався як 
                        
                      </div>                     
                    </div>

                    <div class="summary-item summary-item_range">
                      <div class="summary-item--description">
                        
                      найзручніший, найшвидший та найефективніший сайт з працевлаштування
                        
                      </div>                     
                    </div>
                  </div>
                </div>

                <div class="summary-stastistics--item summary-stastistics--item_candidates">
                  <div class="summary-title summary-title--show-color">
                    <a href="/developers/" class="summary-title--content">
                      <span class="summary-title--text">Ти зможеш все</span>              
                    </a>
                  </div>
                  <div class="summary-list">                    
                    <div class="summary-item summary-item_range">                      
                      <div class="summary-item--description">
                      Ми віримо у кожного, підштовхуємо, мотивуємо та надихаємо
                      </div>
                    </div>                   
                  </div>
                </div>

              </div>
            </div>

            <div class="salaries-chart">
              <div class="salaries-chart--container">
                <div class="chart" id="graph" >
                                       
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="salary" fill="#5cb85c" background={{ fill: '#eee' }} />
        </BarChart>
      
      
                </div>
              </div>
            </div>

            <div class="salaries-pulse">
              <div class="salaries-promo salaries-promo_pulse">
                <div class="salaries-promo--text">
                  
                    <p>DevConnector - анонімний пошук роботи для програмістів.</p>

                  
                </div>                
              </div>
            </div>

            <div class="salaries-telegram">
              
              
            </div>

            <div class="salaries-about">
              <div class="about">
                
                  <h4>Швидкий пошук роботи</h4>
                  <p>Хочеш стати затребуваним ІТ-спеціалістом?</p> 
                  <p>Заходи на сайт для пошуку роботи - DevConnector.</p> 
                  <p>Пошук роботи в IT - це просто! На DevConnector зібрані нові вакансії від провідних IT компаній. Широкий функціонал. Швидкий та зручний пошук. Реєстрація в 3 кліки.</p>
                                                  
              </div>
            </div>

            <div class="salaries-filters">
              <div class="jobs-filter">

                <div class="jobs-filter-wrapper">
                  <div class="jobs-filter__set-title">В нас Ви знайдете будь які вакансії</div>

                  <div class="jobs-filter__set jobs">
                    <a href="#" class="jobs-filter__link jobs-filter__link--active">
                      Усі
                    </a>
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          C# / .NET
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          2D Artist
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          3D Artist
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Android
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Angular
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Blockchain
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Business Analyst
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          C / C++ / Embedded
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Data Analyst
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Data Engineer
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Data Science
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Design / UI/UX
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          DevOps
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Drupal
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Flutter
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Game Designer
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Golang
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          HR / Recruiters
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          HTML
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          iOS
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Java
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          JavaScript / Front-End
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Laravel
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Lead / Architect / CTO
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Lead Generation
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Magento
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Marketing
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Node.js
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          PHP
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Product Manager
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Project Manager
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Python
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          QA Manual
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          QA Automation
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          React
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          React Native
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Ruby
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Rust
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          SEO
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          SQL / DBA
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Sales
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Salesforce
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Scala
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Scrum Master
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Security
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Customer/Technical Support
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Symfony
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Sysadmin
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Technical Writer
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Gamedev / Unity
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Vue
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          WordPress
                        </a>
                      
                    
                      
                        <a href="#" class="jobs-filter__link ">
                          Xamarin
                        </a>
                      
                    
                  </div>
                </div>

                {/* <div class="jobs-filter-wrapper">
                  <div class="jobs-filter__set-title">Досвід роботи</div>

                  <div class="jobs-filter__set">
                    <a href="#" class="jobs-filter__link jobs-filter__link--active">
                      Будь-який досвід роботи
                    </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Менше року
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Від року до двох
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        2-5 років
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        5+ років досвіду
                      </a>
                    
                  </div>
                </div> */}

                {/* <div class="jobs-filter-wrapper">
                  <div class="jobs-filter__set-title">Англійська</div>

                  <div class="jobs-filter__set">
                    <a href="#" class="jobs-filter__link jobs-filter__link--active">
                      Будь-який
                    </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Beginner/Elementary
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Pre-Intermediate
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Intermediate
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Upper-Intermediate
                      </a>
                    
                      <a href="#" class="jobs-filter__link ">
                        Advanced/Fluent
                      </a>
                    
                  </div>
                </div> */}

                {/* <div class="jobs-filter-wrapper">
                  <div class="jobs-filter__set-title">Місто</div>

                  <div class="jobs-filter__set">
                    <a href="#" class="jobs-filter__link jobs-filter__link--active">Усі</a>
                    <a href="#" class="jobs-filter__link ">Віддалена робота</a>
                    <a href="#" class="jobs-filter__link ">Київ </a>
                    <a href="#" class="jobs-filter__link ">Харків </a>
                    <a href="#" class="jobs-filter__link ">Львів </a>
                    <a href="#" class="jobs-filter__link ">Дніпро</a>
                    <a href="#" class="jobs-filter__link ">Одеса </a>
                  </div>
                </div> */}

              </div> 
            </div>

          </div>
        </div>
      </div>

    </div> 
  </div>
      </Fragment>
    </div>
  );
  
}
export default SalaryChart;