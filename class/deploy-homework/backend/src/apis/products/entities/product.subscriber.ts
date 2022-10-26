import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';
@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Product; // 기다려야함
  }
  afterInsert(event: InsertEvent<Product>): void | Promise<any> {
    console.log(event); // 실제 event.entity.price,  event.entity.name ~

    // 로그를 저장하는 방법 3가지
    // 1. 여기서 발생한 로그를 서버 컴퓨터에 저장하기(오늘txt 내일txt ~이런식으로 )시간별, 일자별 로그 로테이션, => 디스트저장(느림 )

    // 2.  DB에 로그 테이블 만들고 저장하기(추천안함 서브데이터라 관리 문제생김)

    // 3. 외부 빅데이터(BigQuery) 관련 DB에 로그테이블 만들고 저장(추천)
    const bigquery = new BigQuery({
      keyFilename: 'gcp.bigquery.json',
      projectId: 'backand',
    });
    bigquery
      .dataset('mybigquery09')
      .table('prodcutlog')
      .insert([
        {
          id: event.entity.id,
          name: event.entity.name,
          discription: event.entity.description,
          price: event.entity.price,
          isSoldout: event.entity.isSoldout,
        },
      ]);

    // ====================================
    // 1. 트리거는 언제 사용하면 안될까?
    // 중요한 트렌젝션 연결된 중요한 내용들.. 안하는게 좋음

    // 2. 어떤것들을 사용하면 좋을까?
    // 메인 로직에 큰 피해를 안끼치는 로직들 .. (통계 계산하기, 로그 쌓아놓기)
  }
}
