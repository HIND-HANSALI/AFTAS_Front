import { Component } from '@angular/core';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent {

  members:any[]= [];
  
  constructor(private memberService: MemberService) {  }

  ngOnInit() {
    this.getMembers();
    
   }
   private getMembers(){
    this.memberService. getAllMembers().subscribe((data:any) => {
      this.members = data.data;
      console.log('Members data:', this.members); 
    });

  }
}
