import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_model/member';
import { Pagination } from 'src/app/_model/pagination';
import { User } from 'src/app/_model/User';
import { UserParams } from 'src/app/_model/userParams';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  members: Member[] = [];
  pagination: Pagination = {} as Pagination;
  userParams: UserParams = {} as UserParams;
  user: User = {} as User;
  genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];


  constructor(private memberService: MembersService, private accountService: AccountService) {
    this.userParams = this.memberService.getUserParams();
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.memberService.setUserParams(this.userParams);
    this.loadMembers();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    });

  }
 
  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }
}
