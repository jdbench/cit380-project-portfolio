import React from 'react';
import { Container } from 'react-bootstrap';
import { JournalNav } from '../../components';
import { PdfComponent } from '../../components'
import pdf from './resources/W10.pdf';

export function J10() {
  return (
    <div className='content d-flex'>
        <JournalNav />
        <Container className='my-2 col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <h1 className='bg-warning px-2 py-3'>Week 10</h1>
            <div className='d-flex bg-light align-items-center justify-content-center px-1 py-1'>
                <div className='embed-responsive embed-responsive-16by9'>
                    {PdfComponent(pdf)}
                </div>
            </div>
        </Container>
    </div>
  )
}
